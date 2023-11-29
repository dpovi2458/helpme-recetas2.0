function Photos() {
    const photoUrls = [
      'https://www.saboresperuanos.pe/temp/platos/platos2b54klg4aidd8j91ade1hecf5.jpg',
      'https://www.saboresperuanos.pe/temp/platos/platos46jd5eahalei05kg8ac6febd1.jpg',
      'https://www.saboresperuanos.pe/temp/platos/platos7j8difc5eebhka1d5a1c58gl4.png',
      'https://www.saboresperuanos.pe/temp/platos/platos0fabjid52efgcaa359lkh1bde.jpg',
      'https://www.saboresperuanos.pe/temp/platos/platosfekdfd7bel6jdice15fah5ag0.jpg',
      'https://www.saboresperuanos.pe/temp/platos/platoseh1bd7fi1ekagje6f1dlca855.jpg',
      'https://www.saboresperuanos.pe/temp/platos/platos6gh6ajd63k9fe51l0ibe6addc.jpg',
      'https://www.saboresperuanos.pe/temp/platos/platosjelag5ac4d619b6dih5ek5fbd.jpg',
    ];

    return (
        <div>
            {photoUrls.map((url, index) => (
                <img key={index} src={url} alt={url} />
            ))}
        </div>
    );
}
