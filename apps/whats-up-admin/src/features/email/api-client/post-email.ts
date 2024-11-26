interface EmailBody {
  rawText: string;
}

export function postEmail(body: EmailBody) {
  return fetch('/api/emails', {
    method: 'POST',
    body: JSON.stringify({
      rawText: body.rawText,
    }),
  });
}
