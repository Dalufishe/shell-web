# Shell 指令網頁介面

這是一個使用 Node.js 實現的前後端應用程式，能夠執行 Shell 指令，並將結果返回到前端顯示。

您可以使用這個工具來執行基本的 Shell 指令，並將結果直接顯示在瀏覽器中。

## 使用方法

### 1. 安裝 Node.js

#### 為什麼需要安裝 Node.js？

Node.js 是一個基於 Chrome V8 引擎的 JavaScript 運行時環境，能讓你在伺服器端執行 JavaScript 程式。這個專案利用 Node.js 執行 Shell 指令並將結果傳遞到前端顯示。因此，您需要安裝 Node.js 才能運行這個專案。

#### 安裝步驟

前往 Node.js 官方網站 https://nodejs.org/，下載並安裝最新版本的 Node.js。

安裝完成後，您可以在命令行中確認安裝是否成功。輸入以下命令檢查 Node.js 和 npm（Node.js 的套件管理工具）的版本：

```bash
node -v
npm -v
```

若顯示版本號，則表示安裝成功。

### 2. 安裝專案依賴

首先，您需要安裝專案所需的所有依賴。請在您的專案根目錄下運行以下命令：

```bash
npm install
```

### 3. 建立腳本

根據您的需求，建立一個 `script.bat`（Windows）或 `script.sh`（Linux/macOS）檔案，並在其中寫下您需要執行的 Shell 指令或批次檔指令。

- **Windows (script.bat)**

```bat
echo Hello, World!
```

- **Linux/macOS (script.sh)**

```bash
#!/bin/bash
echo "Hello, World!"
```

確保您的 `script.sh` 檔案具有執行權限，您可以使用以下命令來設置執行權限：

```bash
chmod +x script.sh
```

### 3. 啟動伺服器

執行以下命令啟動伺服器：

```bash
npm run start
```

這將啟動一個本地伺服器，預設運行在 `127.0.0.1:3000`。

### 4. 訪問工具

打開瀏覽器，並訪問以下 URL 來使用您的工具：

```
http://127.0.0.1:3000
```

這將顯示一個簡單的前端界面，您可以點擊按鈕來執行不同的 Shell 指令，並查看其結果。

## 程式碼結構與使用技術

### 程式碼結構

此專案主要由以下幾個部分組成：

- **前端 (HTML, CSS, JavaScript)**：

  - `public/index.html`：包含基本的 HTML 結構，設置介面和按鈕來觸發 Shell 指令。
  - `public/style.css`：用於設計簡單的介面樣式。
  - `public/script.js`：主要的 JavaScript 程式碼，用來處理前端與後端之間的互動，利用 `fetch` 發送請求並顯示結果。

- **後端 (Node.js, Express)**：
  - `index.js`：設置 Express 伺服器來處理請求，並通過 `child_process` 模組來執行 Shell 指令。

---

### 使用技術

- **HTML**：
  用於構建頁面的基本結構，展示按鈕和結果區域。

- **CSS**：
  用於設計簡單的頁面樣式，使介面更具可讀性和吸引力。

- **JavaScript**：
  用於實現前端與後端的互動。當用戶在頁面上點擊執行指令的按鈕時，JavaScript 會發送 `fetch` 請求到後端。

- **Fetch (AJAX)**：
  用於與後端進行非同步通信，發送請求並獲取 Shell 指令的執行結果。這使得頁面無需重新加載即可顯示執行結果。

- **Node.js**：
  基於 Chrome V8 引擎的 JavaScript 運行環境，用於後端執行 JavaScript。此專案利用 Node.js 來啟動伺服器並處理請求。

- **Express**：
  用於快速構建 Node.js 伺服器的框架，負責處理從前端發送的請求，並執行 Shell 指令。

- **Child Process**：
  是 Node.js 內建的模組，用於執行外部命令（如 Shell 指令）並捕獲其輸出。在這個專案中，它用來執行 Shell 指令並將結果傳回前端。

## 未來擴展

- 撰寫 Shell 腳本：

提供一個簡單的編輯器，讓使用者可以創建和編輯自訂的 Shell 腳本。

- 管理 Shell 腳本：

提供腳本的查看、刪除、命名、更新等管理功能。

- 腳本執行歷史：

記錄每次腳本執行的結果，並提供查看執行歷史的功能，幫助使用者追蹤過去的操作。

- 腳本參數：

提供自定義的輸入參數（例如，目錄路徑、檔案名稱等），並將這些參數傳遞給腳本進行執行。

- 錯誤處理和回饋：

提供更詳細的錯誤回報和處理機制，當腳本執行失敗時，顯示錯誤訊息並提供修正建議。

## 參考資源

以下是一些與專案相關的參考資源，可以進一步學習並擴展這個專案：

1. **Node.js 官方網站**：

   - [https://nodejs.org/](https://nodejs.org/)
   - 提供 Node.js 的安裝、文檔以及教學資源。

2. **Node.js `child_process` 模組**：

   - [https://nodejs.org/dist/latest-v16.x/docs/api/child_process.html](https://nodejs.org/dist/latest-v16.x/docs/api/child_process.html)
   - 這個模組允許 Node.js 程式執行外部命令，您可以參考這裡的 API 文檔來進行更多高級操作。

3. **Node.js `fs`（檔案系統）模組**：

   - [https://nodejs.org/dist/latest-v16.x/docs/api/fs.html](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html)
   - `fs` 模組可以用來讀取、寫入、刪除檔案及目錄，這對於管理腳本檔案等用途非常有用。

4. **JavaScript 基本語法**：

   - [MDN JavaScript 指南](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide)
   - 提供 JavaScript 語法、結構、函數、物件等詳細介紹，非常適合學習和參考。

5. **MDN `fetch` API**：

   - [https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API](https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API)
   - `fetch` API 是用來發送網絡請求的現代 JavaScript API，適用於與後端服務進行交互。

6. **StackOverflow - Wrong encoding when using child_process spawn or exec under Windows**：

   - [https://stackoverflow.com/questions/20731785/wrong-encoding-when-using-child-process-spawn-or-exec-under-windows](https://stackoverflow.com/questions/20731785/wrong-encoding-when-using-child-process-spawn-or-exec-under-windows)
   - 關於在 Windows 環境下處理 `child_process` 模組的編碼問題，這是一個常見的問題，適合參考解決方案。

7. **Linux `echo` 命令**：

   - [https://man7.org/linux/man-pages/man1/echo.1.html](https://man7.org/linux/man-pages/man1/echo.1.html)
   - 用於在 Linux 系統中輸出文字的命令，常用於創建檔案或顯示訊息。

8. **Windows `echo` 命令**：
   - [https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/echo](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/echo)
   - 在 Windows 系統中，`echo` 命令用於輸出文字到控制台，常用於批次檔操作。
