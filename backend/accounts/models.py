from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name='profile')
    want_location = models.CharField(max_length=30, blank=True,null=True)

    def __str__(self):
        return self.user.username


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)        

post_save.connect(create_user_profile, sender=User)        