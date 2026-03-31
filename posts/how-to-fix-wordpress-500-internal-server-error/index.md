---
title: "How to Fix the WordPress 500 Internal Server Error"
slug: "how-to-fix-wordpress-500-internal-server-error"
metaTitle: "Fix WordPress 500 Internal Server Error – Step by Step"
metaDescription: "Getting a 500 Internal Server Error on your WordPress site? Here's how to diagnose and fix the most common causes quickly and safely."
date: "2026-03-31"
coverImage: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1200&q=80"
---

A 500 Internal Server Error is one of the most frustrating WordPress problems because it tells you almost nothing. The server encountered "an unexpected condition" — helpful, right? Unlike more specific errors, the 500 error is a catch-all that can stem from many different causes.

The good news is that there's a systematic way to diagnose it, and most causes are fixable without a server administrator.

## What Causes a WordPress 500 Error?

The error originates from your web server (Apache or Nginx) and means something went wrong at the PHP or server level before WordPress could finish processing the request. Common causes include:

- A corrupted `.htaccess` file
- Exhausted PHP memory limit
- A PHP fatal error in a plugin or theme
- Corrupted WordPress core files
- File or folder permission problems
- PHP timeout on large operations

The key to fixing it is finding which of these is your specific situation.

## Step 1: Check the Error Logs

Your web server generates error logs that record the actual cause of the 500 error. This is the fastest way to pinpoint the problem.

**Finding your error logs:**
- In cPanel hosting: navigate to **Metrics > Error Log**
- Via FTP: look for `error_log` files in your web root or individual directories
- Some hosts have log viewers in their hosting dashboard

The log entry will look something like:
```
[PHP Fatal error] Call to undefined function get_field() in /wp-content/themes/mytheme/functions.php on line 47
```

This tells you exactly which file and line caused the crash. Search for that function or plugin and you'll know what to fix.

If you don't have access to error logs, enable WordPress's own debug logging (as covered in the White Screen of Death article — these two errors share the same diagnostic approach).

## Step 2: Check and Fix the .htaccess File

A corrupted `.htaccess` file is one of the most common causes of 500 errors. It's a server configuration file in your WordPress root directory, and a syntax error in it causes the server to return a 500 error immediately.

**How to fix:**
1. Connect via FTP and navigate to your WordPress root directory
2. Download your current `.htaccess` as a backup
3. Rename `.htaccess` to `.htaccess_backup`
4. Create a new file called `.htaccess` with this standard WordPress content:

```apache
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
# END WordPress
```

5. Visit your site. If the error is gone, the old `.htaccess` was the problem.
6. You can also regenerate `.htaccess` from within WordPress by going to **Settings > Permalinks** and clicking Save Changes.

## Step 3: Increase the PHP Memory Limit

When WordPress runs out of PHP memory mid-execution, it can trigger a 500 error. Add this to your `wp-config.php` file:

```php
define('WP_MEMORY_LIMIT', '256M');
```

If you have access to `php.ini`, set:
```
memory_limit = 256M
```

Or via `.htaccess`:
```apache
php_value memory_limit 256M
```

If you're on shared hosting and can't change the memory limit yourself, contact your host's support. Most shared hosts can increase your memory limit on request.

## Step 4: Deactivate Plugins via FTP

If the error appeared immediately after installing or updating a plugin, that plugin is almost certainly the cause. Even if the error appeared without an obvious trigger, a plugin is often the culprit.

If you can access your WordPress admin:
1. Go to **Plugins**
2. Deactivate all plugins
3. Test your site
4. Reactivate plugins one at a time until the error returns

If you cannot access the admin (because the 500 error affects it too):
1. Via FTP, navigate to `/wp-content/plugins/`
2. Rename the `plugins` folder to `plugins_off`
3. Try accessing your site
4. If the error is gone, rename the folder back to `plugins` and reactivate plugins one at a time

## Step 5: Switch to a Default Theme

If deactivating plugins didn't resolve the error, your theme may be causing it. Via FTP, navigate to `/wp-content/themes/` and rename your current theme's folder. WordPress will fall back to a default theme.

If the error goes away, your theme has a PHP error. Check if there's an updated version of the theme, or review your `functions.php` for recent modifications.

## Step 6: Check File Permissions

Incorrect file permissions can cause 500 errors, though this is less common than the above causes. WordPress files and directories should have these permissions:

- Directories: **755**
- Files: **644**
- `wp-config.php`: **600**

You can check and change permissions via FTP (most FTP clients have a "File Permissions" option) or via your hosting file manager.

If any directory is set to `777` (fully open), change it to `755`. If files are set to `666` or `777`, change them to `644`.

## Step 7: Check for Corrupt WordPress Core Files

A failed automatic update can sometimes corrupt WordPress core files. You can replace them safely:

1. Download WordPress from wordpress.org
2. Delete the `wp-admin` and `wp-includes` folders from the downloaded zip
3. Upload the remaining files, overwriting your existing installation
4. Do NOT delete or overwrite `wp-content` — that's where your content lives

This replaces only core files and leaves your data, themes, and plugins untouched.

## Step 8: Increase PHP Script Execution Time

For 500 errors that occur during large operations (importing products, running bulk updates, generating a sitemap), the script may be timing out. Increase the execution limit in `php.ini` or `.htaccess`:

```apache
php_value max_execution_time 300
```

Or in `wp-config.php`:
```php
set_time_limit(300);
```

## Specific Scenario: 500 Error Only on Admin Pages

If your front-end loads fine but the WordPress admin (`/wp-admin/`) shows a 500 error, the issue is most likely:
- A plugin that runs only in the admin context
- A corrupted admin-specific file
- An administration email address conflict (rare, but possible after migrations)

Try accessing `/wp-admin/plugins.php` directly to deactivate plugins without loading the full dashboard.

## When to Escalate

If you've worked through all of these steps and can't find the cause:
- Check if your host is experiencing server-side issues (their status page)
- Ask your host's support — many will check server logs for you
- Contact a WordPress developer with server access to diagnose directly

A 500 error that resists systematic diagnosis usually involves server configuration issues or obscure plugin interactions that are easiest to resolve with direct server access and experience reading PHP error logs.
