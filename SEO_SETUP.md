# SEO対策 & Google Search Console 登録手順

## 📊 すでに実装済みのSEO対策

### ✅ 完了している項目

1. **メタタグ最適化**
   - タイトルタグ
   - メタディスクリプション（詳細な説明文）
   - キーワードタグ
   - Author情報
   - Robotsタグ

2. **OGPタグ（SNSシェア用）**
   - Facebook用
   - Twitter Card用
   - 画像、タイトル、説明文

3. **正規URLタグ**
   - 重複コンテンツ防止

4. **サイトマップ（sitemap.xml）**
   - 全ページの構造を検索エンジンに通知

5. **robots.txt**
   - 検索エンジンへのクロール許可

---

## 🚀 Google Search Console 登録手順

### ステップ1: Google Search Consoleにアクセス

1. https://search.google.com/search-console にアクセス
2. Googleアカウントでログイン（neboca.keiri@gmail.com など）

### ステップ2: プロパティを追加

1. 左上の **プロパティを選択** をクリック
2. **プロパティを追加** をクリック
3. **URLプレフィックス** を選択
4. 以下のURLを入力:
   ```
   https://nebo-git.github.io/neboca-lp02/
   ```
5. **続行** をクリック

### ステップ3: 所有権の確認

#### 方法A: HTMLファイルによる確認（推奨）

1. Google Search Consoleが指定するHTMLファイルをダウンロード
   - 例: `google1234567890abcdef.html`
2. このファイルを `neboca-lp02` フォルダのルートに配置
3. GitHubにプッシュ
   ```bash
   git add google*.html
   git commit -m "Add Google Search Console verification file"
   git push
   ```
4. 数分待ってから Google Search Console で **確認** をクリック

#### 方法B: HTMLタグによる確認

1. Google Search Consoleが表示するメタタグをコピー
   ```html
   <meta name="google-site-verification" content="xxxxxxxxxx" />
   ```
2. `index.html` の `<head>` セクションに追加
3. GitHubにプッシュ
4. Google Search Console で **確認** をクリック

### ステップ4: サイトマップの送信

所有権確認後:

1. 左メニューから **サイトマップ** を選択
2. 新しいサイトマップの追加欄に以下を入力:
   ```
   sitemap.xml
   ```
3. **送信** をクリック

✅ 成功すると「成功しました」と表示されます

### ステップ5: URL検査とインデックス登録

1. 上部の検索バーに以下のURLを入力:
   ```
   https://nebo-git.github.io/neboca-lp02/
   ```
2. **URL検査** をクリック
3. 「URLがGoogleに登録されていません」と表示される場合:
   - **インデックス登録をリクエスト** をクリック
4. 1〜2分待つ
5. 完了!

---

## ⏱️ インデックス登録にかかる時間

- **最短**: 数時間〜1日
- **通常**: 2〜3日
- **最大**: 1〜2週間

---

## 🔍 検索結果に表示されるまで

### すぐに検索したい場合

Google検索で以下を検索:
```
site:nebo-git.github.io/neboca-lp02/
```

これでインデックスされているか確認できます。

### 一般的な検索ワードで表示されるには

以下のキーワードで上位表示を目指す:
- 「経理代行 個人事業主」
- 「記帳代行 料金」
- 「クラウド会計 導入支援」
- 「開業支援 経理」
- 「neboca」

**期間**: 1〜3ヶ月程度

---

## 📈 検索順位を上げるための追加施策

### 1. コンテンツの充実
- ブログ記事を追加
- 「経理のお役立ち情報」ページ
- お客様の声・導入事例

### 2. 外部リンクの獲得
- SNS（Twitter、Facebook）で共有
- ビジネスディレクトリに登録
- 関連サイトからのリンク

### 3. 定期的な更新
- Q&Aの追加
- サービス内容の更新
- 新しい情報の発信

### 4. ページ速度の最適化
- 画像の圧縮
- 不要なコードの削除

---

## 🎯 OGP画像の準備（推奨）

現在、`images/ogp.jpg` が設定されていますが、まだ画像がありません。

### OGP画像を作成:

1. サイズ: **1200×630px**
2. 内容:
   - neboca. のロゴ
   - 「経理代行・記帳代行」などのキャッチコピー
   - 料金情報（10,000円〜）
3. 保存場所: `images/ogp.jpg`

### 無料ツール:
- **Canva**: https://www.canva.com/
  - テンプレート「OGP画像」で検索
  - 1200×630pxで作成

---

## ✅ 完了チェックリスト

- [ ] Google Search Consoleに登録
- [ ] 所有権の確認完了
- [ ] サイトマップ送信完了
- [ ] インデックス登録リクエスト完了
- [ ] `site:` 検索で表示確認
- [ ] OGP画像を作成・配置
- [ ] SNSでサイトをシェア

---

## 📞 サポート

質問があれば、以下を確認:
- Google Search Console のヘルプセンター
- https://support.google.com/webmasters/

---

## 🎉 おめでとうございます!

これで neboca.lp02 は検索エンジンに最適化され、
数日以内にGoogle検索に表示されるようになります!