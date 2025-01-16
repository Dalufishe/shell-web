const express = require("express");
const iconv = require("iconv-lite");
const { exec } = require("child_process");
const os = require("os");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

// 判斷 windows / linux
const isWindows = os.platform() === "win32";

// 執行自訂義 shell 腳本
app.get("/api/shell", (req, res) => {
  const scriptName = isWindows ? "script.bat" : "script.sh"; // 根據操作系統決定腳本名稱
  const scriptPath = path.join(__dirname, scriptName); // 使用絕對路徑來指定腳本位置

  // 根據操作系統選擇命令
  const command = isWindows
    ? `cmd.exe /c ${scriptPath}` // Windows 執行 .bat 文件
    : `bash ${scriptPath}`; // Linux 執行 .sh 文件

  exec(command, { encoding: "binary" }, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ message: `Error: ${stderr}` });
    }
    res.json({
      message: iconvDecode(stdout),
    });
  });
});

// 獲取伺服器路徑
app.get("/api/path", (req, res) => {
  const filePath = __dirname;
  res.json({ message: filePath });
});

// 啟動伺服器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// 編碼轉換工具
const encoding = "big5";
const binaryEncoding = "binary";

function iconvDecode(str = "") {
  return iconv.decode(Buffer.from(str, binaryEncoding), encoding);
}
