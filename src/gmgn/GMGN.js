const { TelegramInstance } = require("./TelegramInstance");

const TRADE_BOT_NAME = "GMGN_Sniper_Bot";

const SIGNALS_BOT_NAME = "gmgnsignals";

const BUY_AMOUNT = 0.5; // 单次买入数量
const SELL_AMOUNT = 0.5; // 单次卖出数量

const monitorAddress = [];

const Smart_Money_FOMO = 'https://t.me/gmgnsignals/1086';

class GMGN {
  snedMessage(message) {
    return TelegramInstance.sendMessage(TRADE_BOT_NAME, { message });
  }

  sendBuyMessage(address, amount) {
    const message = `/buy ${address} ${amount}`;
    return this.sendMessage(message);
  }

  sendSellMessage(address, amount) {
    const message = `/sell ${address} ${amount}`;
    return this.sendMessage(message);
  }

  async start(callback) {
    await TelegramInstance.start();
    TelegramInstance.addEventHandler(async (event1) => {
      console.log('event1', event1);
      // step1 获取消息体中的频道ID
      // step2 对应的频道 如 Smart_Money_FOMO
      // step3 解析出对应的token合约地址 是否在monitorAddress中
      // step4 解析是买是卖
      /// step5 instance.buy(token, amount) 或 instance.sell(token, amount)
    },  (event2) => {
      console.log('event2', event2);
    });
  }
}


async function run()  {
  const instance = new GMGN();
  try {
    await instance.start();

  } catch (error) {
    console.log(error)
  }
}

module.exports = GMGN;