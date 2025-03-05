# Exiftool
## Add EXIF recording date from name for WhatsApp images (matching the pattern 'IMG-YYYYMMDD-WANNNNNN.JPG')
Use the date/time information from the filename (e.g. YYYYMMDD). Note: This works by applying some cleverness by exiftool. The WA-part will get converted in minutes though.
```exiftool -if "$filename =~ /^IMG-\d{8}-WA\d{4}\.\w*/" "-alldates<filename" -overwrite_original -v -r -i "@eaDir" -ext JPG . -fast2```


## Use the extracted date information to rewrite the file modification date. This allows for proper displaying in Android Gallery
```exiftool -if "$filename =~ /^IMG-\d{8}-WA\d{4}\.\w*/" "-FileModifyDate<DateTimeOriginal" -overwrite_original -v -r -i "@eaDir" -ext JPG . -fast2```

## Hints
1. for Unix use '', for Windows use ""
2. on Windows use cmd, not powershell
3. on Windows, cd alone does not work for external drive: type e.g. M: to get on drive M and then cd to folder


## Find files without EXIF data
```exiftool -s3 -q -filepath -if "not $exif:all" -r DIR```

### Find files without EXIF data. Exclude subfolder and apply only to extensions JPG and JPEG
```exiftool -s3 -q -filepath -if "not $exif:all" -r DIR -i SUBDIR -ext jpg -ext jpeg```
