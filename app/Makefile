.PHONY: clean
GODEP=godep
GOCMD=$(GODEP) go
GOBUILD=$(GOCMD) build
GOCLEAN=$(GOCMD) clean
GOTEST=$(GOCMD) test
GOGET=$(GOCMD) get
BINARY_NAME=app
BINARY_VERSION=0.1.0
BINARY_DIR=bin
BINARY_LINUX_AMD64=$(BINARY_DIR)/$(BINARY_NAME)_$(BINARY_VERSION)-linux-amd64
BINARY_WINDOWS_AMD64=$(BINARY_DIR)/$(BINARY_NAME)_$(BINARY_VERSION)-windows-amd64.exe
BINARY_DARWIN_AMD64=$(BINARY_DIR)/$(BINARY_NAME)_$(BINARY_VERSION)-darwin-amd64.app

all: run

build: 
	$(GOBUILD) -o $(BINARY_NAME) -v

run: build
	./$(BINARY_NAME)

clean:
	$(GOCLEAN)
	rm -f $(BINARY_NAME)
	rm -f $(BINARY_LINUX_AMD64)
	rm -f $(BINARY_WINDOWS_AMD64)
	rm -f $(BINARY_DARWIN_AMD64)

build-all: build-linux-amd64 build-windows-amd64 build-darwin-amd64

# Cross compilation
build-linux-amd64:
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 $(GOBUILD) -o $(BINARY_LINUX_AMD64) -v
build-windows-amd64:
	CGO_ENABLED=0 GOOS=windows GOARCH=amd64 $(GOBUILD) -o $(BINARY_WINDOWS_AMD64) -v
build-darwin-amd64:
	CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 $(GOBUILD) -o $(BINARY_DARWIN_AMD64) -v