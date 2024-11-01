locals {
  dist_filepath = "../dist"
}

resource "aws_s3_object" "dist" {
  for_each = fileset(local.dist_filepath, "**")
  bucket = aws_s3_bucket.app_bucket.id
  key    = each.key
  source = "${local.dist_filepath}/${each.value}"
  etag   = filemd5("${local.dist_filepath}/${each.value}")
}
