# neboca. 事業LP

## 📁 フォルダ構成

```
neboca-lp/
├── index.html          # メインHTMLファイル
├── css/
│   └── styles.css      # スタイルシート
├── js/
│   └── script.js       # JavaScript
├── images/             # 画像フォルダ
│   ├── hero1.jpeg      # トップ背景1
│   ├── hero2.jpeg      # トップ背景2
│   ├── hero3.jpeg      # トップ背景3
│   ├── hero4.jpeg      # トップ背景4
│   ├── hero5.jpeg      # トップ背景5
│   ├── about1.jpeg     # About画像1（経理代行について）
│   └── about2.jpeg     # About画像2（強み）
└── README.md           # このファイル
```

## 🖼️ 画像について

### 必要な画像（7枚）

| ファイル名 | 用途 | 推奨サイズ | 備考 |
|-----------|------|----------|------|
| hero1.jpeg | トップ背景1 | 1920×1080px | 5秒ごとに自動切り替え |
| hero2.jpeg | トップ背景2 | 1920×1080px | 〃 |
| hero3.jpeg | トップ背景3 | 1920×1080px | 〃 |
| hero4.jpeg | トップ背景4 | 1920×1080px | 〃 |
| hero5.jpeg | トップ背景5 | 1920×1080px | 〃 |
| about1.jpeg | About右側 | 800×600px | 「経理代行について」の説明に添える画像 |
| about2.jpeg | About左側 | 800×600px | 「強み」の説明に添える画像 |

### 画像の配置

1. プロジェクトフォルダに `images` フォルダを作成
2. 上記7枚の画像を配置
3. ファイル名は**正確に**合わせてください（大文字小文字も区別されます）

### 画像が表示されない場合

- ファイル名が正確か確認（hero1.jpeg, hero2.jpeg...）
- 拡張子が `.jpeg` か `.jpg` か確認（両方対応していますが、統一推奨）
- ファイルサイズが大きすぎないか確認（1枚500KB以下推奨）

## 🚀 デプロイ手順 (GitHub Pages)

### 1. GitHubリポジトリの作成

1. GitHubにログイン
2. 新規リポジトリを作成 (例: `neboca-lp`)
3. リポジトリは **Public** に設定

### 2. ファイルのアップロード

```bash
# ローカルでGit初期化
git init
git add .
git commit -m "Initial commit"

# GitHubリポジトリと連携
git remote add origin https://github.com/あなたのユーザー名/neboca-lp.git
git branch -M main
git push -u origin main
```

### 3. GitHub Pagesの有効化

1. リポジトリの **Settings** タブを開く
2. 左メニューから **Pages** を選択
3. **Source** で `main` ブランチを選択
4. **Save** をクリック
5. 数分後、`https://あなたのユーザー名.github.io/neboca-lp/` でアクセス可能に

## 📧 お問い合わせフォーム設定 (Formspree)

### 1. Formspreeアカウント作成

1. https://formspree.io/ にアクセス
2. 無料アカウントを作成
3. 新規フォームを作成

### 2. フォームIDの取得と設定

1. Formspreeで生成された **フォームID** をコピー (例: `xyzabc123`)
2. `index.html` の以下の部分を編集:

```html
<form class="contact-form" action="https://formspree.io/f/あなたのフォームID" method="POST">
```

### 3. 受信メール設定

- Formspreeの設定画面で受信メールアドレスを設定
- 送信テストを実施

## 🎨 カスタマイズ方法

### 色の変更

`css/styles.css` の以下の変数を編集:

- メインカラー: `#2c7a7b` (青緑)
- アクセントカラー: `#f6ad55` (オレンジ)

### テキストの変更

`index.html` で各セクションの内容を直接編集

### グラデーション画像の差し替え

将来的に画像を差し替える場合:

1. `css/styles.css` の `.gradient-bg-1` などのクラスを編集
2. `background: linear-gradient(...)` を `background-image: url('画像パス')` に変更

## 📱 レスポンシブ対応

- PC、タブレット、スマートフォンに対応
- ブレークポイント: 768px

## 🔧 今後の拡張

- [ ] Google Analyticsの追加
- [ ] OGP設定(SNSシェア時の表示)
- [ ] FAQの内容充実
- [ ] 実績・お客様の声セクション追加

## 📞 サポート

質問や問題があれば、GitHubのIssuesで報告してください。
