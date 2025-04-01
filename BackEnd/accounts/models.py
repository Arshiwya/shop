from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(verbose_name="email", blank=True, unique=True)
    phone = models.CharField(max_length=20, verbose_name="phone", null=True, blank=True, unique=True)

    class Meta:
        verbose_name = "user"
        verbose_name_plural = "users"

    def save(self, *args, **kwargs):

        try:
            UserProfileImage.objects.get(user=self)

        except ValueError:
            super(User, self).save(*args, **kwargs)
            UserProfileImage.objects.create(user=self, image="profiles/default.png")

        except UserProfileImage.DoesNotExist:
            UserProfileImage.objects.create(user=self, image="profiles/default.png")

        return super(User, self).save(*args, **kwargs)

    def get_full_name(self):

        if self.first_name:
            if self.last_name:
                return self.first_name + " " + self.last_name
            else:
                return self.username

        else:
            return self.username

    def __str__(self):
        return self.get_full_name()


class UserProfileImage(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name="images", verbose_name="user")
    image = models.ImageField(verbose_name="image", upload_to="profiles/", null=False)
    create_time = models.DateTimeField(auto_now_add=True, verbose_name="create time")
    is_main = models.BooleanField(verbose_name="is_main", default=False)

    class Meta:
        verbose_name = "user image"
        verbose_name_plural = "user images"

    def __str__(self):
        return self.user.get_full_name() + " profile image"
