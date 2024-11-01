locals {
  s3_origin_id   = "${var.app_bucket}-origin"
  aws_cert_arn   = "arn:aws:acm:us-east-1:387479857085:certificate/3cfb72f2-9174-498c-aff3-4d556109c60f"
}

resource "aws_cloudfront_origin_access_control" "app_cdn" {
  name                              = "s3-origin-access-control-${var.app_bucket}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "app_cdn" {
  enabled = true

  origin {
    domain_name              = aws_s3_bucket.app_bucket.bucket_regional_domain_name
    origin_id                = local.s3_origin_id
    origin_access_control_id = aws_cloudfront_origin_access_control.app_cdn.id
  }

  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    min_ttl                = "0"
    default_ttl            = "300"
    max_ttl                = "1200"
    target_origin_id       = local.s3_origin_id
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 403
    response_code         = "200"
    response_page_path    = "/index.html"
  }

  viewer_certificate {
    acm_certificate_arn = local.aws_cert_arn
    ssl_support_method  = "sni-only"
  }

  aliases = ["inedu.online", "www.inedu.online"]

  tags = {
    Project = var.project
    AppId = var.app_id
  }
}
