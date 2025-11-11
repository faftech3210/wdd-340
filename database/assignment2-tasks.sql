-- Assignment 2: SQL Tasks

-- 1️ Insert the new record into the account table
INSERT INTO public.account (account_firstname, account_lastname, account_email, account_password)
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');

-- 2️ Modify Tony Stark’s record to change the account_type to "Admin"
UPDATE public.account
SET account_type = 'Admin'
WHERE account_email = 'tony@starkent.com';

-- 3️ Delete the Tony Stark record from the database
DELETE FROM public.account
WHERE account_email = 'tony@starkent.com';

-- 4️ Modify the "GM Hummer" record to replace "small interiors" with "a huge interior"
UPDATE public.inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_make = 'GM' AND inv_model = 'Hummer';

-- 5️ Use an INNER JOIN to list make, model, and classification for all “Sport” vehicles
SELECT i.inv_make, i.inv_model, c.classification_name
FROM public.inventory AS i
INNER JOIN public.classification AS c
  ON i.classification_id = c.classification_id
WHERE c.classification_name = 'Sport';

-- 6️ Update all inventory image paths to include "/vehicles/"
UPDATE public.inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');
