export function formatDateForDateTime(date: Date): string {
    // Format: YYYY-MM-DDThh:mm (zgodny z HTML datetime)
    return date.toISOString().slice(0, 16);
  }
  
  export function formatDateForDisplay(date: Date): string {
    // Format dla wyświetlania użytkownikowi
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    
    if (isToday) {
      return `dzisiaj, ${date.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })}`;
    }
    
    return date.toLocaleString('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }