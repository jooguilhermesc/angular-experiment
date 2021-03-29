produto: Produto[]=[];

  constructor(
	  private route: ActivatedRoute,
	  private productService: ProductService,
	  private location: Location,
  ) {}

  ngOnInit(): void {
	  this.getProducts();
  }

  getProducts(): void {
	  const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProducts()
      .subscribe(produto => this.produto = produto);
  }

  goBack(): void{
  	this.location.back()
  }

  save(): void{
  	this.productService.updateProduct(this.produto).subscribe(()=> this.goBack());
  }