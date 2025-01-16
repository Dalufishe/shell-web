@echo off

:: 顯示當前目錄的檔案清單 (dir)
echo.
echo 顯示當前目錄的檔案清單 (dir):
dir

:: 顯示網路介面資訊 (ipconfig)
echo 顯示網路介面資訊 (ipconfig):
ipconfig

:: 建立一個新的檔案並寫入內容
set fileName=newfile.js
echo.
echo 建立檔案並寫入內容:
echo const hello = 'JavaScript' > %fileName%
echo 檔案 %fileName% 已經建立並寫入內容！
