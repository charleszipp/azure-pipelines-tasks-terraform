export const examplePlan1 = `
Terraform will perform the following actions:

[1m  # azurerm_resource_group.test_01[0m will be updated in-place[0m[0m
[0m  [33m~[0m[0m resource "azurerm_resource_group" "test_01" {
        [1m[0mid[0m[0m       = "/subscriptions/00000000-aaaa-0000-0000-aaaaaaaaaaaa/resourceGroups/test-01-rg"
        [1m[0mname[0m[0m     = "test-01-rg"
      [33m~[0m [0m[1m[0mtags[0m[0m     = {
          [33m~[0m [0m"test" = "test" [33m->[0m [0m"test1"
        }
        [90m# (1 unchanged attribute hidden)[0m[0m
    }

[1m  # azurerm_resource_group.test_02[0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "azurerm_resource_group" "test_02" {
      [31m-[0m [0m[1m[0mid[0m[0m       = "/subscriptions/00000000-aaaa-0000-0000-aaaaaaaaaaaa/resourceGroups/test-02-rg" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mlocation[0m[0m = "eastus2" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mname[0m[0m     = "test-02-rg" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m     = {} [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # azurerm_resource_group.test_03[0m will be created[0m[0m
[0m  [32m+[0m[0m resource "azurerm_resource_group" "test_03" {
      [32m+[0m [0m[1m[0mid[0m[0m       = (known after apply)
      [32m+[0m [0m[1m[0mlocation[0m[0m = "eastus2"
      [32m+[0m [0m[1m[0mname[0m[0m     = "test-03-rg"
    }

[0m[1mPlan:[0m 1 to add, 1 to change, 1 to destroy.[0m
[0m
[1mChanges to Outputs:[0m
  [32m+[0m [0m[1m[0mthree[0m[0m = (known after apply)
  [31m-[0m [0m[1m[0mtwo[0m[0m   = "/subscriptions/00000000-aaaa-0000-0000-aaaaaaaaaaaa/resourceGroups/test-02-rg" [90m->[0m [0m[90mnull[0m[0m[0m
`;