---
title: "WordPress White Screen of Death: Causes and Fixes"
slug: "wordpress-white-screen-of-death-fix"
metaTitle: "WordPress White Screen of Death – How to Fix It"
metaDescription: "Seeing a blank white screen on your WordPress site? Learn the exact causes of the White Screen of Death and how to fix it step by step."
date: "2026-03-31"
coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80"
---

You open your WordPress site and see nothing — just a blank white page. No error message, no text, nothing. This is the WordPress White Screen of Death (WSOD), and while it looks catastrophic, it's almost always fixable once you know what's causing it.

This guide walks you through every common cause and gives you clear steps to get your site back online.

## What Causes the WordPress White Screen of Death?

The WSOD usually comes down to one of three things:

1. **A PHP fatal error** — code that crashes before it can output anything
2. **A memory limit problem** — WordPress runs out of allocated memory mid-execution
3. **A plugin or theme conflict** — incompatible code introduced by an update

The blank screen happens because PHP encounters a fatal error and stops executing, but WordPress hasn't outputted its error handling HTML yet — so the browser receives an empty response.

## Step 1: Enable WordPress Debug Mode

The most important first step is turning on error logging so you can actually see what's wrong.

Connect to your site via FTP or your hosting file manager and open `wp-config.php`. Find this line:

```php
define('WP_DEBUG', false);
```

Replace it with:

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

Setting `WP_DEBUG_DISPLAY` to `false` prevents error messages from appearing publicly while still logging them. After saving, visit your site again and then check `/wp-content/debug.log` — the actual error message will be there, and it will usually point directly at the culprit file.

## Step 2: Deactivate All Plugins

If you can't access the WordPress admin (because the WSOD affects it too), you need to deactivate plugins via FTP or your hosting file manager.

Navigate to `/wp-content/plugins/` and rename the entire `plugins` folder to something like `plugins_disabled`. WordPress will no longer be able to load any plugins and will fail gracefully instead.

Try accessing your site and admin again. If it works, your issue is a plugin conflict. Rename the folder back to `plugins`, then start reactivating plugins one at a time (by renaming individual plugin folders back to their original names) until the white screen returns — that last plugin is the problem.

## Step 3: Switch to a Default Theme

If deactivating plugins didn't fix it, the problem may be in your theme. Via FTP, navigate to `/wp-content/themes/` and rename your active theme's folder to something else.

WordPress will fall back to a default theme (Twenty Twenty-Four or similar). If your site loads, your theme is the cause. Contact the theme developer or switch to a different theme.

## Step 4: Increase the PHP Memory Limit

WordPress may be exhausting its allocated PHP memory, especially after a plugin update that added more functionality. Add this line to your `wp-config.php`:

```php
define('WP_MEMORY_LIMIT', '256M');
```

If your hosting plan supports it, you can also increase this in your `php.ini` file or through your hosting control panel. Shared hosting plans sometimes cap memory at 64MB or 128MB, which is not enough for plugin-heavy sites.

## Step 5: Check for a PHP Version Mismatch

A common cause of sudden white screens after hosting changes is a PHP version upgrade. Your host may have updated PHP automatically (from 7.4 to 8.0, for example), and a plugin or theme you're using may not be compatible with the new version.

Check your current PHP version in **WordPress Admin > Tools > Site Health > Info > Server**. If you recently changed hosts or if your host auto-updated PHP, revert to the previous PHP version temporarily and see if the site recovers. Then update your plugins and theme before trying the newer PHP version again.

## Step 6: Check for Corrupted Core Files

In rare cases, a failed WordPress update can corrupt core files. You can replace them with fresh copies without touching your content or settings.

Download WordPress from wordpress.org and extract the zip. Delete the `wp-admin` and `wp-includes` folders from the download (you only need the fresh copies), then upload the new versions to your server, overwriting the existing files.

Do not delete your `wp-content` folder — that contains your themes, plugins, and uploads.

## Step 7: Check `.htaccess`

A corrupted `.htaccess` file can cause white screen or redirect issues. Connect via FTP and rename `.htaccess` to `.htaccess_old`. WordPress will no longer use it.

If your site loads, regenerate a clean `.htaccess` by going to **Settings > Permalinks** in the WordPress admin and clicking Save Changes. This writes a fresh `.htaccess` with the correct rewrite rules.

## The WSOD Affects Only One Page

If only a specific page (not the whole site) shows a white screen, the cause is almost certainly something specific to that page's content or template:

- A badly formatted shortcode or block
- A widget or dynamic element fetching data that no longer exists
- A custom field configuration error

Try editing that page in a different block editor or through phpMyAdmin if the editor itself is broken.

## Preventing the White Screen of Death

The best way to deal with the WSOD is to not encounter it on your live site in the first place:

- **Always test updates on a staging site first** before applying to production
- **Keep a recent backup** so you can roll back immediately
- **Update plugins, themes, and WordPress core regularly** — outdated software is more likely to conflict after large updates
- **Use a quality host** that sends PHP error notifications and offers one-click staging environments

Most WSOD incidents can be resolved within 30 minutes if you follow these diagnostic steps systematically. If you've worked through this entire guide and still can't identify the cause, it's time to call a WordPress developer who can access your server directly and dig into the logs.
