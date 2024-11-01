terraform {
  backend "s3" {
    bucket         = "configs.inedu.online"
    key            = "terraform.tfstate"
    region         = "eu-west-2"
    profile        = "ieo"
    encrypt        = true
  }
}
