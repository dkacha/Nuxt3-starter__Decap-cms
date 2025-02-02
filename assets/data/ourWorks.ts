const useImage: Record<string, { default: string }> = import.meta.glob(
  '~/assets/images/works/**/*',
  { eager: true }
);

export type TOurWorkitem = {
  title: string;
  cover: string;
  gallery: string  []
}

export const ourWorks: TOurWorkitem[] =  [
  {
    title: 'Česká zemědělská univerzita v Praze - budova rektorátu',
    cover: useImage['/assets/images/works/rektorat_czu/home.jpg'].default,
    gallery: [
      useImage['/assets/images/works/rektorat_czu/rektorat_01.jpg'].default,
      useImage['/assets/images/works/rektorat_czu/rektorat_02.jpg'].default,
      useImage['/assets/images/works/rektorat_czu/rektorat_03.jpg'].default,
    ]
  },
  {
    title: 'FN Hradec Králové - transfuzní oddělení',
    cover: useImage['/assets/images/works/hematologie_hk/home.jpg'].default,
    gallery: [
      useImage['/assets/images/works/hematologie_hk/Hematologie_01.jpg'].default,
      useImage['/assets/images/works/hematologie_hk/Hematologie_02.jpg'].default,
      useImage['/assets/images/works/hematologie_hk/Hematologie_03.jpg'].default,
      useImage['/assets/images/works/hematologie_hk/Hematologie_04.jpg'].default,
    ]
  },
  {
    title: 'MŠ Lipenec - studie',
    cover: useImage['/assets/images/works/ms_lipence/home.jpg'].default,
    gallery: [
      useImage['/assets/images/works/ms_lipence/pohled_1.jpg'].default,
      useImage['/assets/images/works/ms_lipence/pohled_2.jpg'].default,
      useImage['/assets/images/works/ms_lipence/pohled_3.jpg'].default,
      useImage['/assets/images/works/ms_lipence/pohled_4.jpg'].default,
      useImage['/assets/images/works/ms_lipence/interier.jpg'].default,
    ]
  },
  {
    title: 'ON Mladá Boleslav - pavilon 5',
    cover: useImage['/assets/images/works/onmb/home.jpg'].default,
    gallery: [
      useImage['/assets/images/works/onmb/onmb_01.jpg'].default,
      useImage['/assets/images/works/onmb/onmb_02.jpg'].default,
      useImage['/assets/images/works/onmb/onmb_03.jpg'].default,
    ]
  },
  {
    title: 'Česká zemědělská univerzita v Praze - centrum ekonomicko-manažerských studií II',
    cover: useImage['/assets/images/works/cems_czu/home.jpg'].default,
    gallery: [
      useImage['/assets/images/works/cems_czu/cems_01.jpg'].default,
      useImage['/assets/images/works/cems_czu/cems_02.jpg'].default,
      useImage['/assets/images/works/cems_czu/cems_03.jpg'].default,
      useImage['/assets/images/works/cems_czu/cems_04.jpg'].default,
    ]
  },
  {
    title: 'Rekonstrukce zámku v Kostelci nad Č. lesy',
    cover: useImage['/assets/images/works/kostelec/home.jpg'].default,
    gallery: [
      useImage['/assets/images/works/kostelec/kostelec_01.jpg'].default,
      useImage['/assets/images/works/kostelec/kostelec_02.jpg'].default,
      useImage['/assets/images/works/kostelec/kostelec_03.jpg'].default,
      useImage['/assets/images/works/kostelec/kostelec_04.jpg'].default,
      useImage['/assets/images/works/kostelec/kostelec_05.jpg'].default,
    ]
  }
];
