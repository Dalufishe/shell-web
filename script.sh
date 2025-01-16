#!/bin/bash

# 顯示當前目錄的檔案清單 (ls)
echo -e "\n顯示當前目錄的檔案清單 (ls)："
ls

# 顯示系統網路介面資訊 (ifconfig)
echo "顯示網路介面資訊 (ifconfig)："
ifconfig

# 建立一個新的檔案並寫入內容
fileName="newfile.js"
echo -e "\n建立檔案並寫入內容："
echo "const hello = 'JavaScript'" > %fileName%
echo "檔案 $fileName 已經建立並寫入內容！"
