# Projeye Katkıda Bulunmak
Bir projeye katkıda bulunmak oldukça basittir. İzlemeniz gereken adımlar:

- Projeyi Fork edin.

![Fork etmek](https://cdn.discordapp.com/attachments/1103629924549541930/1269609540920410132/fork.png?ex=66b0af86&is=66af5e06&hm=17b44e10486ee12b631d35fa77346e382f903316af5ae7a93095f3da320b0093& "Fork Etme")

- Fork ettiğiniz proje kendi hesabınıza gelecektir, bu projeyi klonlayın. (Eğer bilgisayarınızda Git kurulu değilse, [indirin](https://git-scm.com/download/win) ve kurun.)

```bash
git clone https://github.com/[kullanıcı_adınız]/basic-discordjs-base # Fork ettiğiniz projenin URL'si
# Proje bulunduğunuz dizine klasör olarak klonlanır.
```

- **Visual Studio Code**'u açın.
- **Klasör Aç** seçeneğini kullanarak klonladığınız projeyi açın.

![Projeyi açmak](https://cdn.discordapp.com/attachments/1103629924549541930/1269612956908261386/proje.png?ex=66b0b2b5&is=66af6135&hm=81cfdfb5765bcf5c7e88d92e2a01c0d1f4e8be5b03cbaefdb2c708f07aece27a& "Projeyi açma")

- Yaptğınız değişiklikleri **Visual Studio Code** üzerinden Commit ve Push edin.
- Değiştirilmiş (M), İzlenmeyen [U (Genelde yeni eklenen dosyalarda görünür)] ve Silinmiş (D) dosyalar için resimde ki işlemi uygulayın:

![Değişiklik ekleme](https://cdn.discordapp.com/attachments/1103629924549541930/1269652990134980608/commit3.png?ex=66b0d7fd&is=66af867d&hm=60f47143533e1b6584f7238f5cce547c8817a5c3a9c86a2a91a6e7552c458b6b&)

- Commit işlemi:

![Commit işlemi](https://cdn.discordapp.com/attachments/1103629924549541930/1269649148294987807/commit.png?ex=66b0d469&is=66af82e9&hm=ee90ad97cec55b2cbf30980f08f0c7dc64baa0a6ac84343f709a810165f34630&)

- Push işlemi (Commit edilmiş değişiklikleri depoya gönderme):

![Push işlemi](https://cdn.discordapp.com/attachments/1103629924549541930/1269649780418543668/commit2.png?ex=66b0d500&is=66af8380&hm=ac31545676c1d1507ec639748b1ceac9fc0ce2121a8b24c370c53e13b5021a34&)

- [Ana proje](https://github.com/meto1558/basic-base) üzerinden "Pull requets" sekmesine tıklayın.
- Çıkan ekranda "New pull request" butonuna tıklayın.
- "compare across forks" metnine tıklayın.

![Forks](https://cdn.discordapp.com/attachments/1103629924549541930/1269632021316243456/pr2.png?ex=66b0c476&is=66af72f6&hm=ffff7b0d28f344e1e8bd214ea19c96302348ba71fb7d3a3f1c951590d35b6013&)

- **head repository** seçeneğini Fork ettiğiniz depo olarak belirleyin. (kullancı_adınız/basic-base)

![Forks2](https://cdn.discordapp.com/attachments/1103629924549541930/1269651000524931133/pr.png?ex=66b0d623&is=66af84a3&hm=c65d043d17e911b2ad3a8ae57db6b295f0a713fe1d4210257ed57feaef50b5cb&)

- Create pull request butonuna tıklayın.
- Yaptığınız değişiklik(ler) için bir başlık (Title) ve detaylı bir açıklama (Description) girin.
- Create pull request butonuna basın ve Pull request'i gönderin.
- İşleminiz proje yöneticileri tarafından incelenecektir, onaylandığı zaman projeye dahil edilecektir.
