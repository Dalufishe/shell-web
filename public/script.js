// API 呼叫函式模板
async function callApi(endpoint) {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API 呼叫失敗: ${response.status}`);
    }

    // 解析回應內容（假設回應是 JSON 格式）
    const data = await response.json();
    return data;
  } catch (error) {
    // 錯誤處理
    console.error("API 錯誤:", error);
  }
}

// 為按鈕綁定事件
document.getElementById("btn1").addEventListener("click", () => {
  callApi("/api/shell").then((data) => {
    document.getElementById("responseText").textContent = data.message;
  });
});

// 顯示路徑
callApi("/api/path").then((data) => {
  document.querySelector(".path-location").textContent = data.message;
});
