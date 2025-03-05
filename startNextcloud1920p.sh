#!/bin/bash
# resizes uploaded pictures to 1920p
# call: ./resize1920p.sh -f %f -n %n
# store this script in: /opt/nextcloudflow/resize1920p.sh

NCFOLDER_ROOT=“/var/www/nextcloud/data/Passl/files”
TARGET_REL=“SofortUpload/Camera_1920p”

MAX_WIDTH=1920
MAX_HEIGHT=1920

FILE_NAME_1920p=$(basename $n)
TARGET_FOLDER=“$NCFOLDER_ROOT/$TARGET_REL”
TARGET_PATH=“$TARGET_FOLDER/$FILE_NAME_1920p”

#convert image to fit a square box, keeping ratio, using imagemagick
convert f -resize $MAX_WIDTHx$MAX_HEIGHT $TARGET_PATH

#rescan, to be found in NC
php /var/www/nextcloud/occ files:scan --path="$TARGET_PATH”
