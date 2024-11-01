provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile
}

resource "aws_s3_bucket" "app_bucket" {
  bucket = var.app_bucket

  tags = {
    Project = var.project
    AppId = var.app_id
  }

}

resource "aws_s3_bucket_website_configuration" "app_bucket" {
  bucket = aws_s3_bucket.app_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_ownership_controls" "app_bucket" {
  bucket = aws_s3_bucket.app_bucket.id
  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}
