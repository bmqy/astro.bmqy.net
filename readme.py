import time
import os
import requests
import re
import json
import pytz
from datetime import datetime


def get_posts(api_url):

    result = ""
    siteUrl = os.environ["SITE_URL"]
    data = requests.get(siteUrl + api_url).json()

    for item in data:
        result = result + f"\n[{item['data']['title']}]({siteUrl}/{item['data']['abbrlink']}.html)\n"

    return result


def main():

    bmqy_api = get_posts("/api/search.json")
    if bmqy_api is None:
        os._exit()

    # print(bmqy_api)

    insert_info = bmqy_api

    # 替换 ---start--- 到 ---end--- 之间的内容
    # pytz.timezone('Asia/Shanghai')).strftime('%Y年%m月%d日%H时M分')
    fmt = '%Y-%m-%d %H:%M:%S %Z%z'
    insert_info = "<!--START_SECTION:bmqy-->\n\n## 博客目录(" + datetime.fromtimestamp(int(time.time()), pytz.timezone(
        'Asia/Shanghai')).strftime('%Y-%m-%d %H:%M:%S') + "更新)" + "\n" + insert_info + "\n<!--END_SECTION:bmqy-->"

    # 获取README.md内容
    with open(os.path.join(os.getcwd(), "README.md"), 'r', encoding='utf-8') as f:
        readme_md_content = f.read()

    new_readme_md_content = re.sub(
        r'\<\!\-\-START_SECTION:bmqy\-\->(.|\n)*\<\!\-\-END_SECTION:bmqy\-\-\>', insert_info, readme_md_content)
    print("==new_readme_md_content==>>", new_readme_md_content)

    with open(os.path.join(os.getcwd(), "README.md"), 'w', encoding='utf-8') as f:
        f.write(new_readme_md_content)


main()
