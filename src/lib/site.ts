// 事実はすべて本番 www.decontracte.co/team_order/ と、本番の料金画像(public/img/uniform.png)から。
// 料金ページ・見積もり依頼ページの文(サイズ・特殊デザイン料・海外発送・請求書/領収書・1か月保証・
// 名入れ品の返品不可・携帯アドレス・事務所での打ち合わせ等)も同ページの記載。2026-11-13 照合。先方未確認の約束(無料・最短・何度でも等)は書かない。

export const LINE_URL = "https://lpo8bfj3.autosns.app/addfriend/s/UZQRqrdzlc/@uyn8037j";
export const MAIL = "info@decontracte.co";
export const INSTAGRAM_URL = "https://www.instagram.com/decontracte_team_order/";
export const ADDRESS = "〒810-0022 福岡市中央区薬院1-14-18 信興ビル202";

export const NAV = [
  { href: "/#items", label: "作れるもの", en: "ITEMS" },
  { href: "/price", label: "料金", en: "PRICE" },
  { href: "/flow", label: "注文の流れ", en: "FLOW" },
  { href: "/faq", label: "よくある質問", en: "FAQ" },
] as const;

export const ITEMS = [
  {
    en: "UNIFORM",
    name: "昇華ユニフォーム",
    img: "/img/item_set.jpg",
    alt: "昇華ユニフォーム上下セットの表と裏",
    note: "シャツ・パンツの上下セット。単品でも注文できます。",
    from: "上下セット ¥11,000(税抜)",
  },
  {
    en: "BIBS",
    name: "昇華ビブス",
    img: "/img/item_bibs.jpg",
    alt: "昇華ビブス シングルの表と裏",
    note: "シングルとリバーシブルから選べます。",
    from: "シングル ¥4,500／リバーシブル ¥5,500(税抜)",
  },
  {
    en: "SOCKS",
    name: "ソックス",
    img: "/img/item_socks.jpg",
    alt: "昇華ソックス",
    note: "上下セットには含まれません。",
    from: "¥1,800(税抜)・5足から",
  },
] as const;

export const PRICES = [
  { name: "上下セット(シャツ＋パンツ)", price: "¥11,000", unit: "税抜" },
  { name: "シャツ 半袖", price: "¥6,900", unit: "税抜" },
  { name: "シャツ 長袖", price: "¥7,900", unit: "税抜" },
  { name: "パンツ", price: "¥6,000", unit: "税抜" },
  { name: "ソックス", price: "¥1,800", unit: "税抜" },
  { name: "ビブス シングル", price: "¥4,500", unit: "税抜" },
  { name: "ビブス リバーシブル", price: "¥5,500", unit: "税抜" },
] as const;

export const OPTIONS = [
  { name: "GK用パッド(シャツ)", price: "¥1,500", unit: "税抜" },
  { name: "GK用パッド(パンツ)", price: "¥1,500", unit: "税抜" },
  { name: "リブレット衿", price: "¥2,000", unit: "税抜" },
] as const;

export const FEES = [
  { name: "データ作成料(ロゴがAiデータでない場合)", price: "¥11,000", unit: "1データ" },
  { name: "追加注文の送料(全国一律)", price: "¥880", unit: "税込" },
] as const;

export const MINIMUMS = [
  { k: "初回", v: "5", u: "枚から" },
  { k: "追加", v: "1", u: "枚から" },
  { k: "ソックス", v: "5", u: "足から(初回・追加とも)" },
] as const;

export const FLOW = [
  { en: "REQUEST", t: "見積もり依頼", d: "LINEかメールで、チーム名・競技・枚数・色のイメージを送ってください。見積もりをお返しします。", img: "/img/flow01.jpg" },
  { en: "MEETING", t: "打ち合わせ", d: "いただいた内容をもとに、デザイナーがイメージ図を作ります。希望の色や配色、参考の画像があれば一緒に送ってください。", img: "/img/flow02.jpg" },
  { en: "DESIGN", t: "デザイン確認", d: "メールかLINEでデザインを確認し、直したい所があれば伝えてください。", img: "/img/flow03.jpg" },
  { en: "DETAILS", t: "詳細確認", d: "デザインが決まったら、選手名・背番号・サイズ・枚数を確定し、最終の金額をお伝えします。", img: "/img/flow04.jpg" },
  { en: "PAYMENT", t: "ご入金", d: "銀行振込でお支払いください。ご入金を確認してから製作に入ります。", img: "/img/flow05.jpg" },
  { en: "DELIVERY", t: "納品", d: "ご注文から約4〜5週間でお届けします。", img: "/img/flow06.jpg" },
] as const;

export const FAQ = [
  { q: "何枚から注文できますか?", a: "初回は5枚から、追加は1枚からです。ソックスは初回・追加とも5足からです。" },
  { q: "デザインが決まっていなくても頼めますか?", a: "はい。色やイメージを伝えていただければ、デザイナーがデザインを作ります。" },
  { q: "ロゴをたくさん入れると高くなりますか?", a: "ロゴなどのマーキングをいくつ入れても、金額は変わりません。" },
  { q: "ロゴのデータは何で送ればいいですか?", a: "Illustrator(Ai)のデータでお送りください。JPGなど他の形式の場合は、データ作成料(1データ11,000円)がかかります。" },
  { q: "シャツだけ、パンツだけでも注文できますか?", a: "できます。シャツ・パンツ・ソックスを単品で注文でき、後から追加もできます。" },
  { q: "プロチームと同じデザインにできますか?", a: "同じものは作れませんが、雰囲気の近いデザインなら作れます。" },
  { q: "前に作ったデザインで追加注文できますか?", a: "できます。過去のデザインデータは保管しています。" },
  { q: "サッカー・フットサル以外の競技でも作れますか?", a: "主にサッカー・フットサル用です。ほかの競技はご相談ください。" },
  { q: "支払い方法は?", a: "銀行振込です。分割払いはできません。事務所で受け取る場合は、事前予約のうえ現金でもお支払いいただけます。" },
  { q: "注文を変更・キャンセルできますか?", a: "注文確定前なら変更・キャンセルできます。確定後の変更はできず、請求書発行後のキャンセルもできません。" },
  { q: "届いた商品に不備があったら?", a: "到着から7日以内にご連絡ください。不良品・誤配送は当社負担で交換または返金します。お客様都合の返品は、原則お受けしていません。" },
  { q: "手持ちのユニフォームに追加で加工できますか?", a: "お手持ちのユニフォームへの加工はお受けしていません。" },
] as const;
