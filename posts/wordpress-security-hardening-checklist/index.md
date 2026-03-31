---
title: "WordPress Security Hardening Checklist for 2025"
slug: "wordpress-security-hardening-checklist"
metaTitle: "WordPress Security Hardening Checklist (2025)"
metaDescription: "Protect your WordPress site with this practical security hardening checklist. Covers logins, file permissions, plugins, backups, and server settings."
date: "2026-03-31"
coverImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80"
---

WordPress powers over 40% of all websites — which also makes it the most targeted platform by automated bots, hackers, and malware scripts. The good news is that the vast majority of WordPress hacks are entirely preventable. Most attacks exploit known vulnerabilities in outdated plugins, weak passwords, and default configurations that are trivially easy to fix.

This checklist covers every practical security measure you should implement on any WordPress site.

## Login and Authentication Security

### Use Strong, Unique Passwords

This sounds obvious, but weak admin passwords are responsible for an enormous proportion of WordPress compromises. Your WordPress admin password should be:
- At least 20 characters
- A random mix of characters (use a password manager to generate it)
- Unique — not used on any other service

The same applies to all admin-level users on the site, your hosting account, your database, and your FTP credentials.

### Change the Default Admin Username

WordPress defaults to a username of "admin" during installation. Attackers know this and use it in brute force attempts. If your admin account is still called "admin", create a new administrator account with a different username, log in as that account, and delete the old one.

### Enable Two-Factor Authentication (2FA)

Even a strong password can be compromised through phishing or data breaches. 2FA adds a second layer — a time-based code from your phone — that makes stolen passwords useless.

Free plugins for WordPress 2FA: WP 2FA, Two Factor Authentication by David Anderson, or the 2FA features built into security suites like Wordfence.

### Limit Login Attempts

WordPress by default allows unlimited login attempts. Attackers use this to run automated brute force attacks. Install a plugin like Limit Login Attempts Reloaded or use the login protection built into Wordfence to block IPs after a defined number of failed attempts.

### Consider Changing the Login URL

The default WordPress login URL is `/wp-login.php` — every bot in the world knows this. Moving it to a custom URL (e.g., `/site-access`) stops automated attacks from ever reaching your login form. WPS Hide Login does this cleanly.

This is security through obscurity, not a substitute for strong authentication — but it dramatically reduces log noise and bot traffic hitting your server.

## WordPress Core, Themes, and Plugin Updates

### Keep Everything Updated

The majority of WordPress hacks exploit vulnerabilities in outdated plugins and themes. Patches are released regularly — often specifically for known security issues. Running outdated software is like leaving your door unlocked.

Enable automatic updates for WordPress core security releases (minor versions like 6.4.1 → 6.4.2). For plugins and themes, either enable auto-updates or check for updates weekly.

### Remove Inactive Plugins and Themes

Every inactive plugin is a potential attack surface, even if it's not activated. Inactive plugins still sit on your server and can be scanned for vulnerabilities. Delete anything you don't use — you can reinstall later if needed.

WordPress installs with several default themes (Twenty Twenty-Two, Twenty Twenty-Three, etc.). Keep at least one as a fallback, but delete the rest.

### Only Install Plugins from Reputable Sources

The WordPress plugin repository has security screening, but it's not perfect. For premium plugins, only purchase from established developers or the official WordPress marketplace. Avoid nulled (pirated) premium plugins — they frequently contain malware backdoors.

## File and Server Security

### Set Correct File Permissions

WordPress files and directories have recommended permission settings:
- Directories: `755`
- Files: `644`
- `wp-config.php`: `600` (read/write only by owner)

Permissions that are too open (like `777`) allow any process on the server to write to your files. Check these via FTP or ask your host.

### Protect wp-config.php

`wp-config.php` contains your database credentials and secret keys. Beyond setting restrictive file permissions, you can move the file one level above your WordPress root directory — WordPress will still find it automatically.

You can also block direct access to it via `.htaccess`:

```apache
<files wp-config.php>
order allow,deny
deny from all
</files>
```

### Disable File Editing in the Admin

WordPress includes a built-in code editor for themes and plugins in the admin panel. If an attacker gains admin access, they can use this to inject malicious code directly. Disable it by adding this to `wp-config.php`:

```php
define('DISALLOW_FILE_EDIT', true);
```

### Disable XML-RPC If You Don't Need It

XML-RPC is a WordPress API used by mobile apps and some plugins. It's also a common attack vector for brute force and DDoS amplification attacks. If you don't use it (most sites don't), disable it:

```apache
# In .htaccess
<Files xmlrpc.php>
  Order Deny,Allow
  Deny from all
</Files>
```

## Monitoring and Backups

### Install a Security Plugin

Wordfence (free tier is excellent) and Sucuri are the two leading WordPress security plugins. They provide:
- Malware scanning
- Firewall rules blocking known attack patterns
- Login monitoring and alerting
- File integrity checking (alerts you if core files are modified)

A security plugin doesn't replace good practices — it's an additional layer of detection and protection.

### Enable Regular Backups

If everything else fails, backups are your ultimate safety net. A backup you can restore from is more valuable than any other security measure.

Your backup strategy should be:
- **Automated** — daily minimum for active sites
- **Offsite** — stored somewhere other than your server (cloud storage like S3, Dropbox, or Google Drive)
- **Tested** — regularly verify you can actually restore from your backups

UpdraftPlus (free) and Jetpack Backup are reliable options. Many quality hosts include automated backups as well.

### Enable HTTPS Everywhere

All data between your visitors and your server should be encrypted. An SSL certificate (free via Let's Encrypt) enables HTTPS. Force all traffic to HTTPS via your `.htaccess` and ensure your WordPress address settings use `https://`.

Mixed content (some pages or assets loading over HTTP) breaks checkout security warnings and erodes trust.

## A Note on Security Plugins vs. Server-Level Security

A WordPress security plugin is a layer running on top of PHP. A web application firewall (WAF) at the server or CDN level (Cloudflare's free plan includes basic WAF functionality) stops attacks before they ever reach WordPress. Both have value; neither replaces the other.

For e-commerce sites, high-traffic sites, or sites handling sensitive user data, consider a dedicated security audit. A professional review of your server configuration, plugin choices, and access controls can identify vulnerabilities that automated scanners miss.

Security is not a one-time task — it's an ongoing practice. Review this checklist quarterly and after any significant changes to your site.
