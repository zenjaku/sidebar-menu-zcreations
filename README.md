# ZCreations Admin Panel

A simple and responsive admin panel template built with Bootstrap, Font Awesome, and custom styles.

## Installation

To use this template in your project, you can install it via npm:

```bash
npm install zcreations
```

## Usage

After installation, you can link the necessary CSS and JavaScript files in your HTML.

1.  **CSS:** Link the `style.css` and `all.css` files in the `<head>` section of your HTML file. You will also need to include Bootstrap's CSS.

    ```html
    <head>
        ...
        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="node_modules/zcreations/css/all.css">
        <link rel="stylesheet" href="node_modules/zcreations/css/style.css">
        ...
    </head>
    ```

2.  **JavaScript:** Link the `script.js` file at the end of your `<body>` section. You will also need to include Bootstrap's JavaScript bundle.

    ```html
    <body>
        ...
        <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        <script src="node_modules/zcreations/js/script.js"></script>
    </body>
    ```

3.  **HTML Structure:** Use the provided HTML structure from `index.html` as a starting point for your admin panel.

## Files Included

*   `css/style.css`: The main stylesheet for the admin panel.
*   `css/all.css`: Font Awesome styles.
*   `js/script.js`: JavaScript for sidebar functionality.
*   `webfonts/`: Directory containing Font Awesome font files.

## Customization

You can customize the admin panel by modifying the `css/style.css` file. The sidebar, navbar, and other components can be adjusted to fit your needs. The sidebar's behavior is controlled by the JavaScript in `js/script.js`.
