# FrameX

AI影视创作平台 — 从创意到分镜，一键生成可拍摄的完整方案。

## 技术栈

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (动画)
- **Lucide React** (图标)

## 页面结构

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/` | 品牌展示、开始创作入口 |
| 身份选择 | `/identity/` | 5种创作者身份选择 |
| 创作配置 | `/config/` | 风格/类型/时长配置 |
| 功能页 | `/create/` | 核心创作空间（左配置右结果） |
| 分镜页 | `/storyboard/` | 分镜预览与播放 |
| 支付页 | `/payment/` | 会员方案选择 |
| 个人中心 | `/profile/` | 用户信息与项目列表 |

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 打开 http://localhost:3000
