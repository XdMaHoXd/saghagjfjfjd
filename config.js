module.exports = config;

const config = {
    "ownerID": "765150340202889226", //kendi IDınızı yazınız
    "admins": ["765150340202889226"],
    "support": ["765150340202889226"],
    "token": "ODM0NzI0MTUwODQ5NDM3NzE3.YIFDcQ.ob1duUje-j7P30RfPDajQNDPEyA", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "YU9IT6OuXwC_0d61G6gjRPlyJSv8BlUs", //botunuzun secretini yazınız
      "callbackURL": `https://captain-vortex.glitch.me/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "super-secret-session-thing", //kalsın
      "domain": "https://captain-vortex.glitch.me/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  