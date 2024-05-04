terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }
}

provider "aws" {
  region = "us-east-2"
}

resource "aws_instance" "app_server" {
  ami           = "ami-0ddda618e961f2270"
  instance_type = "t2.micro"

  tags = {
    Name = "ExampleAppServerInstance"
  }
}