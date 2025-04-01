import string
import random
from django.db import models
from django.utils.text import slugify


def slug_generator(size, chars=string.ascii_lowercase + string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


class Category(models.Model):
    name = models.CharField(max_length=128, verbose_name="name", null=False, blank=False)
    slug = models.SlugField(max_length=32, verbose_name="slug", null=False, blank=True, unique=True)
    parent = models.ForeignKey(to='self', on_delete=models.PROTECT, verbose_name="parent", related_name="subcategories",
                               null=True, blank=True)
    description = models.CharField(max_length=256, verbose_name="description", null=True, blank=True)
    is_active = models.BooleanField(default=True, verbose_name="active")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="create time")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="last update")

    class Meta:
        verbose_name = "category"
        verbose_name_plural = "categories"
        ordering = ['-created_at']

    def __str__(self):
        return self.name

    def get_children(self):
        children_list = []
        children = self.subcategories.all()

        for child in children:
            data = {
                "pk": child.id,
                "name": child.name
            }
            children_list.append(data)
        return children_list

    def save(
            self,
            *args,
            force_insert=False,
            force_update=False,
            using=None,
            update_fields=None,
    ):

        if self.slug == "":
            while True:
                slug = slug_generator(size=6)
                if not Category.objects.filter(slug=slug).exists():
                    self.slug = slug
                    break

        return super(Category, self).save(*args,
                                          force_insert=False,
                                          force_update=False,
                                          using=None,
                                          update_fields=None)


class ProductStatus(models.Model):
    name = models.CharField(max_length=128, verbose_name="name", null=False, blank=False)
    description = models.TextField(verbose_name="description", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="create time")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="last update")

    class Meta:
        verbose_name = "product status"
        ordering = ['-created_at']

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255, verbose_name="name", null=False, blank=False)
    description = models.CharField(max_length=256, verbose_name="description", null=True, blank=False)
    slug = models.SlugField(max_length=40, verbose_name="slug", null=False, blank=True, unique=True)
    score = models.IntegerField(verbose_name="score", null=False, blank=True, default=0)
    price = models.IntegerField(verbose_name="price", null=False, blank=False, default=0)
    discount = models.IntegerField(verbose_name="discount", null=False, blank=False, default=0)
    stock = models.IntegerField(verbose_name="stock", null=False, blank=False, default=0)
    categories = models.ManyToManyField(to=Category, related_name="products", verbose_name="categories", blank=True)
    status = models.ForeignKey(to=ProductStatus, verbose_name="status", on_delete=models.PROTECT,
                               related_name="products", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="create time")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="last update")

    class Meta:
        verbose_name = "product"
        verbose_name_plural = "products"
        ordering = ["-created_at"]

    def __str__(self):
        return self.name

    def get_images(self):
        urls = []
        images = self.images.all()
        for image in images:
            urls.append(image.image.url)

        return urls

    def get_categories(self):
        names = []
        categories = self.categories.all()
        for category in categories:
            names.append(category.name)
        return names

    def get_status(self):

        if self.status is not None:
            return self.status.name
        else:
            return "normal"

    def get_final_price(self):
        final_price = (self.price * ((100 - self.discount) / 100))
        return int(final_price)

    def save(
            self,
            *args,
            force_insert=False,
            force_update=False,
            using=None,
            update_fields=None,
    ):

        if self.slug == "":
            while True:
                slug = slug_generator(size=6)
                if not Product.objects.filter(slug=slug).exists():
                    self.slug = slug
                    break

        if self.status is None:
            normal_status, created = ProductStatus.objects.get_or_create(name='normal')
            self.status = normal_status

        return super(Product, self).save(*args,
                                         force_insert=False,
                                         force_update=False,
                                         using=None,
                                         update_fields=None)


class ProductImage(models.Model):
    product = models.ForeignKey(to=Product, on_delete=models.PROTECT, related_name="images", verbose_name="product")
    image = models.ImageField(verbose_name="image", upload_to="products/", null=False)
    slug = models.SlugField(verbose_name="slug", null=False, blank=True, unique=True)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="create time")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="last update")

    class Meta:
        verbose_name = "product image"
        verbose_name_plural = "product images"

    def __str__(self):
        return self.product.name

    def save(
            self,
            *args,
            force_insert=False,
            force_update=False,
            using=None,
            update_fields=None,
    ):
        if self.slug == "":
            while True:
                slug = slug_generator(size=6)
                if not ProductImage.objects.filter(slug=slug).exists():
                    self.slug = slug
                    break

        return super(ProductImage, self).save(*args,
                                              force_insert=False,
                                              force_update=False,
                                              using=None,
                                              update_fields=None)
