locals {
  dist_filepath = "../dist"
}

module "template_files" {
  source = "hashicorp/dir/template"
  base_dir = "${path.module}/${local.dist_filepath}"
}

resource "aws_s3_object" "dist" {
  for_each = module.template_files.files
  bucket = aws_s3_bucket.app_bucket.id
  key    = each.key
  content_type = each.value.content_type
  source  = each.value.source_path
  content = each.value.content
  etag = each.value.digests.md5
}
