switch (process.env.COCO_SMOKE_DOMAIN) {
  case "local":
    module.exports = 'http://localhost:3000';
    break;
  case "next":
    module.exports = 'http://next.codecombat.com';
    break;
  case "staging":
    module.exports = 'http://staging.codecombat.com';
    break;
  case "prod":
    module.exports = 'https://codecombat.com';
    break;
  default:
    module.exports = 'http://localhost:3000';
}
