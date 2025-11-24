'use client'

import { Check, Copy } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface DepositModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  address: string
  featureName: string
}

export function DepositModal({
  open,
  onOpenChange,
  address,
  featureName,
}: DepositModalProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Contribute to {featureName}
          </DialogTitle>
          <DialogDescription>
            Scan the QR code or copy the Bitcoin address to contribute
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 py-4">
          {/* QR Code */}
          <div className="bg-white p-4 rounded-lg">
            <QRCodeSVG
              value={address}
              size={200}
              level="H"
              includeMargin={true}
            />
          </div>

          {/* Address Display */}
          <div className="w-full">
            <span className="text-xs text-zinc-400 mb-2 block font-mono">
              Bitcoin Address
            </span>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 font-mono text-xs text-zinc-300 break-all">
                {address}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={copyToClipboard}
                className="border-zinc-800 hover:bg-zinc-900 hover:border-emerald-500"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Info Text */}
          <div className="text-center text-xs text-zinc-500 space-y-1">
            <p>Send Bitcoin (BSV) to this address to contribute.</p>
            <p>
              Your contribution will be reflected in the funding progress once
              confirmed.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
