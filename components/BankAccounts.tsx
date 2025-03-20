"use client";

import Image from "next/image"
import { Copy, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const accounts = [
  {
    bankName: "Birhan Bank",
    logo: "/birihan.png",
    purpose: "Tithes & General Offerings",
    details: {
      accountName: "Rhema Church",
      accountNumber: "160009000278",
      branchCode: "087654321",
    },
  },
  {
    bankName: "CBE Bank",
    logo: "/cbe.png",
    purpose: "Building Fund",
    details: {
      accountName: "Rhema Church",
      accountNumber: "1000000943006",
      branchCode: "087654322",
    },
  },
  {
    bankName: "Abyssinia Bank",
    logo: "/Abyssinia.png",
    purpose: "Missions & Outreach",
    details: {
      accountName: "Rhema Church",
      accountNumber: "4567-8901-2345-6789",
      branchCode: "157245554",
    },
  },
]

export default function BankAccounts() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-normal mb-4">Our Banking Details</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            You can make direct deposits or transfers to any of our bank accounts below.
          </p>
        </div>

        <div className="space-y-8">
          {accounts.map((account, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 transition-all hover:shadow-md">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-40 h-20 relative flex-shrink-0 bg-white rounded-lg p-4">
                  <Image
                    src={account.logo || "/placeholder.svg"}
                    alt={account.bankName}
                    width={160}
                    height={80}
                    className="object-contain p-2"
                  />
                </div>

                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-500">Purpose</label>
                    <p className="font-medium text-lg">{account.purpose}</p>
                  </div>

                  <div>
                    <label className="text-sm text-gray-500">Account Name</label>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{account.details.accountName}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => handleCopy(account.details.accountName, `${index}-name`)}
                      >
                        {copiedField === `${index}-name` ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-500">Account Number</label>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{account.details.accountNumber}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => handleCopy(account.details.accountNumber, `${index}-account`)}
                      >
                        {copiedField === `${index}-account` ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-500">Branch Code</label>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{account.details.branchCode}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => handleCopy(account.details.branchCode, `${index}-branch`)}
                      >
                        {copiedField === `${index}-branch` ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

 
      </div>
    </section>
  )
}
