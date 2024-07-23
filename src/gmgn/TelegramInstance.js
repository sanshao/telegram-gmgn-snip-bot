import { StringSession } from "telegram/sessions";

const { TelegramClient } = require("telegram");

// 替换为你的 API ID 和 API 哈希
const API_ID = "your_api_id";
const API_HASH = "your_api_hash";
const SESSION_NAME = "your_session_name";

const client = new TelegramClient(new StringSession(SESSION_NAME), API_ID, API_HASH, {
  connectionRetries: 5,
  timeout: 10,
});

export const TelegramInstance = client;