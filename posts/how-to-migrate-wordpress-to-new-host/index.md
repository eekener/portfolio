---
title: "How to Migrate WordPress to a New Host (Without Downtime)"
slug: "how-to-migrate-wordpress-to-new-host"
metaTitle: "How to Migrate WordPress to a New Host Safely"
metaDescription: "Learn how to move your WordPress site to a new host with zero downtime. Step-by-step guide covering backup, transfer, DNS, and testing."
date: "2026-03-31"
coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
---

Switching WordPress hosts is one of those tasks that sounds more complicated than it needs to be — but it also goes wrong more often than it should. A botched migration can cause hours of downtime, data loss, or broken site functionality. Done correctly, you can move a WordPress site to a new host with zero visible downtime.

This guide gives you a safe, professional workflow for migrating WordPress.

## Before You Start: Important Preparation

### Choose the Right Timing

Schedule your migration during your site's lowest-traffic period. For most sites, this is early morning on a weekday. If you run a WooCommerce store, consider briefly enabling maintenance mode or disabling the checkout during the actual DNS switch — you don't want orders flowing to two different databases simultaneously.

### Set Up Your New Hosting Account

Before touching your existing site, have the new hosting environment fully ready:
- New hosting account active
- Domain pointed to the new host (or set up as a subdomain for testing, which we'll cover)
- New PHP version confirmed to match what your current site runs on
- Database access confirmed (cPanel, Plesk, or direct MySQL access)

### Back Up Everything First

Never migrate without a complete, verified backup. Even if everything goes wrong at the new host, your current site must remain intact.

Use UpdraftPlus, All-in-One WP Migration, or Duplicator to create a full backup of your WordPress database and all files. Download this backup to your local computer before proceeding.

## Method 1: Plugin-Based Migration (Easiest)

For most sites under 2GB, a plugin like **Duplicator** or **All-in-One WP Migration** is the fastest reliable approach.

### Using Duplicator:

1. Install and activate Duplicator on your current site
2. Go to Duplicator > Packages > Create New
3. Follow the wizard — it creates two files: an installer PHP file and a zip archive of your entire site
4. Download both files to your computer via FTP

**On the new host:**
1. Create a new empty database and database user in your hosting control panel
2. Upload both Duplicator files to the root of your new hosting directory (usually `public_html`)
3. Visit `http://newhost.com/installer.php` in your browser
4. Follow the setup wizard, entering your new database credentials when prompted
5. Duplicator handles the rest — unpacking files, creating the WordPress installation, and updating database URLs

### Testing before DNS switch:

Use a temporary URL or edit your local `hosts` file to preview the new site on the new server before switching DNS. This lets you verify everything works without any visitors seeing the new server.

To use your local `hosts` file:
1. Open `C:\Windows\System32\drivers\etc\hosts` (Windows) or `/etc/hosts` (Mac/Linux) as administrator
2. Add a line: `NEW_SERVER_IP yourdomain.com`
3. Now your browser goes to the new server when you visit your domain, while everyone else still sees the old server
4. Test thoroughly, then remove the hosts file entry and switch DNS

## Method 2: Manual Migration (Most Control)

For larger sites or complex setups, manual migration gives you the most control.

### Step 1: Export the Database

In your current hosting's phpMyAdmin, select your WordPress database and click Export. Choose the SQL format and click Go. Save the `.sql` file.

If your site is large, use the command line instead for a more reliable export:

```bash
mysqldump -u username -p database_name > wordpress_backup.sql
```

### Step 2: Download All WordPress Files

Using FTP or SFTP, download your entire WordPress installation. This includes:
- `wp-content/` folder (your themes, plugins, and uploads)
- `wp-config.php`
- All core WordPress files

The `wp-content` folder is what matters most — everything else is WordPress core files you can redownload from wordpress.org.

### Step 3: Create the Database on the New Host

In your new host's control panel, create a new MySQL database and user. Give the user full privileges on the new database. Note the database name, username, password, and host (usually `localhost`).

### Step 4: Import the Database

In the new host's phpMyAdmin, select your new empty database and click Import. Select your `.sql` backup file and import it.

For large databases, use the command line:

```bash
mysql -u username -p database_name < wordpress_backup.sql
```

### Step 5: Update wp-config.php

Upload all your WordPress files to the new server. Then edit `wp-config.php` and update the database constants:

```php
define('DB_NAME', 'new_database_name');
define('DB_USER', 'new_database_user');
define('DB_PASSWORD', 'new_database_password');
define('DB_HOST', 'localhost');
```

### Step 6: Update Site URLs in the Database

Your database contains URLs pointing to your old host. After importing, you need to update these. The safest way is to use **WP CLI**:

```bash
wp search-replace 'http://old-host-temp-url.com' 'https://yourdomain.com' --all-tables
```

Or use the **Better Search Replace** WordPress plugin, which handles serialized data correctly (important for themes and plugins that store settings).

## Switching DNS

Once you've verified everything works on the new server:

1. Log into your domain registrar
2. Update the nameservers or A record to point to your new host's IP address
3. DNS propagation typically takes 1–48 hours, though it's often complete within a few hours

During propagation, some visitors will still see the old server and some will see the new one. This is why it's critical that both servers have identical site content during this window.

Keep the old hosting account active for at least a week after migration — both as a fallback and because email (if hosted there) needs time to migrate separately.

## Common Migration Problems

**Images broken on new site:** Usually a URL mismatch. Run a search-replace to update all image URLs in the database.

**Admin login not working:** Check that your database is connected correctly in `wp-config.php`. Try resetting the admin password directly in phpMyAdmin.

**CSS not loading:** Often a URL mismatch or SSL/HTTPS configuration issue. Check your WordPress Address and Site Address in Settings > General.

**Plugins behaving strangely:** Deactivate and reactivate plugins on the new server. Some plugins cache server-specific paths.

## When to Hire a Developer for Migration

Most migrations can be handled by someone comfortable with FTP and hosting control panels. Hire a developer when:
- Your site is a large WooCommerce store with active orders
- You need zero downtime and can't afford any disruption
- Your site has complex server configurations (Redis, custom cron jobs, external integrations)
- Previous migration attempts have failed

A professional server migration typically takes 2–4 hours and eliminates the risk of data loss or extended downtime.
