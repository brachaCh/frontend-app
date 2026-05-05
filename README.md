# Katzefet (Frontend)

אתר פרונטאנד סטטי (HTML/CSS/JS) עם דפים מרובים, עיצוב מותאם, ושימוש בנתונים מקבצי JSON.

## קבצי כניסה (Entry)
- **עמוד פתיחה**: `html/katzefet.html`  
  מאתחל נתוני משתמשים ב־`localStorage` ומעביר אוטומטית ל־`html/home.html`.
- **דף הבית**: `html/home.html`

## איך מריצים (חשוב)
האתר משתמש ב־`fetch()` כדי לקרוא קבצי JSON (למשל `json/users.json`). לכן מומלץ להריץ דרך **שרת מקומי** ולא בפתיחה ישירה של קבצים (`file://`).


# VS Code 
- לפתוח את `html/katzefet.html`
- קליק ימני → **Open with Live Server**

## מבנה הפרויקט
```text
html/    דפי האתר
style/   קבצי CSS
js/      קוד JavaScript
json/    נתונים (users/products/stores)
image/   תמונות ואייקונים
```

## טכנולוגיות
- HTML, CSS, JavaScript (Vanilla)
- Bootstrap (דרך CDN בדפים מסוימים)
- LocalStorage לשמירת מצב משתמש/עגלה

## דפים עיקריים
- `home.html` – דף הבית
- `product.html` – מוצרים
- `basket.html` – עגלה
- `pay.html` – תשלום
- `stores.html` – סניפים
- `login.html` – התחברות
- `aboutUs.html` – אודות

