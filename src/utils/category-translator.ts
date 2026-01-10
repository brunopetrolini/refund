export function translateCategory(category: string): string {
  switch (category) {
    case 'food':
      return 'Alimentação';
    case 'transport':
      return 'Transporte';
    case 'housing':
      return 'Moradia';
    case 'services':
      return 'Serviços';
    case 'other':
      return 'Outros';
    default:
      return 'Categoria desconhecida';
  }
}
