export default function ISRDemo(props) {
   return (
	   <>
	   <div>
		</div>
		  <main>
			<h1 style={{ fontSize: "60px", margin: "20px", textAlign: "center" }}>Incremental Static Regeneration</h1>
			<h2 style={{ fontSize: "25px", margin: "20px", textAlign: "center" }}>
			  (Reload after 10 seconds)
			</h2>
			<h2 style={{ fontSize: "25px", margin: "20px", textAlign: "center" }}>
			  (revalidate interval: 10 seconds)
			</h2>
			<h2 style={{ fontSize: "70px", margin: "20px", textAlign: "center" }}>
			  <div>{props.thought}</div>
			</h2>
			<h2 style={{ fontSize: "40px", margin: "10%", textAlign: "center" }}>
				<a href="/">
					Home
				</a>
			</h2>
		  </main>
	   </>
	);
}

export async function getStaticProps() {
	const ThoughtList = ['"You have to dream before your dreams can come true." – A.P.J Abdul Kalam', 
						'"Life should be great rather than long." – B.R. Ambedkar',
						'“Education is the most powerful weapon which you can use to change the world.” - Nelson Mandela',
						'“Every champion was once a contender that didn’t give up.” ― Gabby Douglas',
			     			'“A little progress each day adds up to big results.” – Satya Nani',
			     			'“Every accomplishment starts with the decision to try.” – Gail Devers',
			     			'“If you can dream it, you can do it.” - Walt Disney',
			     			'“All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.” ― A.P.J. Abdul Kalam',
			     			'“A person who never made a mistake never tried anything new.” — Albert Einstein',
						'“Nothing will work unless you do.” ― Maya Angelou'];
	let index = Math.ceil(Math.random() * 10) % 10;
	return {
		props: {
		  thought: ThoughtList[index],
		},
		revalidate: 10, // In seconds
	}
}

// SIG // Begin signature block
// SIG // MIIougYJKoZIhvcNAQcCoIIoqzCCKKcCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // bifdPqRH+V3UKBdVv/7YOYr0oFKSDmf6XFAkDf5u342g
// SIG // gg3DMIIGrTCCBJWgAwIBAgITMwAAANMCiNhpvd8CCQAA
// SIG // AAAA0zANBgkqhkiG9w0BAQwFADBiMQswCQYDVQQGEwJV
// SIG // UzEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MTMwMQYDVQQDEypBenVyZSBSU0EgUHVibGljIFNlcnZp
// SIG // Y2VzIENvZGUgU2lnbmluZyBQQ0EwHhcNMjYwMzA1MTkw
// SIG // NjE5WhcNMjcwMzAzMTkwNjE5WjCBgjELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEsMCoGA1UEAxMjQXp1cmUgUHVibGljIFNl
// SIG // cnZpY2VzIFJTQSBDb2RlIFNpZ24wggGiMA0GCSqGSIb3
// SIG // DQEBAQUAA4IBjwAwggGKAoIBgQDJrDsZxGHNBYj5RPkR
// SIG // yGEIGZlcCQkqE7SdGa6c2FPAMGu1JLqHur8qNWjR5swe
// SIG // kMMn0WSz2+QE0c848wHvqVVLpWV+Un3Q01Dnyzjifae4
// SIG // h+kzhQTUIhX2rKQbGHdqBe7LXyCgkfDrTNLXsI1xAXAw
// SIG // A42Ar+PpVd1ktqLSsM6pwqrM/FFfEizl9h5gtrEIZODp
// SIG // +jo9vESxKvHGp/Ifca7e/IluDeJffP4ME/fFtUzUCLH/
// SIG // IweugiUcsaTmewSny4odYLtmZK/zpBuPjGTLpUnn4HMy
// SIG // WXLUSOFlgvFrLKCPZxbNxXxBo5EUquzrFbpg9NmQVipJ
// SIG // QsKDSKNHluTwNicItFpZpiPMc7Y2LG11dNAil3yJEBLF
// SIG // MQ/5RqQptcWmgSKoG8Tx7x+RCYQj4Sjl2yJt+4OykVn9
// SIG // /kQ5wo6v6TmIHHZsKdmgIkMCKBuIRcB2FaGwLY+UGMP1
// SIG // xmiwIaekgjUgVwXX8Kv/2SYI9XXrjyUME4NLj0JTBIO7
// SIG // YX201gYYOL8CAwEAAaOCAbkwggG1MA4GA1UdDwEB/wQE
// SIG // AwIHgDAfBgNVHSUEGDAWBggrBgEFBQcDAwYKKwYBBAGC
// SIG // N1sBATAdBgNVHQ4EFgQU6DIfaqBAAm33/QFJGYifZUeQ
// SIG // B3AwRQYDVR0RBD4wPKQ6MDgxHjAcBgNVBAsTFU1pY3Jv
// SIG // c29mdCBDb3Jwb3JhdGlvbjEWMBQGA1UEBRMNNDY5OTgx
// SIG // KzUwNzE4MTAfBgNVHSMEGDAWgBTxL7qRFnzefVInMfV6
// SIG // +9VYWWk6PTBvBgNVHR8EaDBmMGSgYqBghl5odHRwOi8v
// SIG // d3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2NybC9BenVy
// SIG // ZSUyMFJTQSUyMFB1YmxpYyUyMFNlcnZpY2VzJTIwQ29k
// SIG // ZSUyMFNpZ25pbmclMjBQQ0EuY3JsMHwGCCsGAQUFBwEB
// SIG // BHAwbjBsBggrBgEFBQcwAoZgaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tL3BraW9wcy9jZXJ0cy9BenVyZSUyMFJT
// SIG // QSUyMFB1YmxpYyUyMFNlcnZpY2VzJTIwQ29kZSUyMFNp
// SIG // Z25pbmclMjBQQ0EuY3J0MAwGA1UdEwEB/wQCMAAwDQYJ
// SIG // KoZIhvcNAQEMBQADggIBAKJEWoxuo4PDUOPrpeqZZBdc
// SIG // EBjIoYQZjSvEIMTd0fcf89rWN/fr6cbAs3fZtR1LQ2kR
// SIG // Wo2mYixmAQpm6ijAYu3Qg+/NIHofviOVCDqHmaQGEiwi
// SIG // oBsb7Et9V7B9rqsksJslTyCJUJYuIXaKv37suPC7cFpX
// SIG // aaWaNLn0juz1sPKdklvTO23fwcahgRO9nqd9gTi9j6dw
// SIG // /nEJURWo32dl+rxdylnuRd6RHpkJKdlPVXRrr/ZL8sby
// SIG // akoCUN4zNVivUMLmUspYRJIV2TpkZonQnrmTm6TpXGVg
// SIG // Cjj56duTzVa/GRAKLVBHNm8je6esjgoswv6eHmYkmgJR
// SIG // jvZ+eHNloLnXfqByg3CxJ0Gd+nja5RTavYplIc9zfOgq
// SIG // Ng5e6NW8E0Q/AI115WfpM+ncWenWqdPs1YLinyUdRDxi
// SIG // DTmhYTyN1p3FojGtyM+mrQVIvC2l8zQr/LNCTvz/dj2h
// SIG // WqsF/7SDnK4wE812YAp6pPfgtr6BfVD0LMJu+s6f2PXe
// SIG // oLskA4Ac2PoJz5N7FmeY7Wn5shZBf4hOqCJssd5ZBpUb
// SIG // tGYh3iCnQSJP9EokoxVxe7D5HmkqTRNnXqIDQ5zW6bL3
// SIG // SDCYFEG5EWtqV9Ytd0Mjplx/s5+w1TnYbXIKbPzi4Hnb
// SIG // 3Xr0m8YnMuVyhmxGyHZ2CjMpQclgocs2QNsOyr7evLGD
// SIG // MIIHDjCCBPagAwIBAgITMwAAAAKyxJOIeFns0wAAAAAA
// SIG // AjANBgkqhkiG9w0BAQwFADBbMQswCQYDVQQGEwJVUzEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSww
// SIG // KgYDVQQDEyNNaWNyb3NvZnQgUlNBIFNlcnZpY2VzIFJv
// SIG // b3QgQ0EgMjAyMTAeFw0yMTA5MDIxNzQxMTlaFw0zNjA5
// SIG // MDIxNzUxMTlaMGIxCzAJBgNVBAYTAlVTMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xMzAxBgNVBAMT
// SIG // KkF6dXJlIFJTQSBQdWJsaWMgU2VydmljZXMgQ29kZSBT
// SIG // aWduaW5nIFBDQTCCAiIwDQYJKoZIhvcNAQEBBQADggIP
// SIG // ADCCAgoCggIBAKXd/Sy91nFgseVJOFgeRhVxrcahyp1Y
// SIG // GSN0FpOEgEREVb3ND/QgI7I0yd7XG6OE8Vomr5FMxvK8
// SIG // TvJ4Lc6LP9BDz2GSa1M0LlzHKX757/24C0ZndzccA1qQ
// SIG // i00+BmmOr4plmxRzTFv4Phdw8yBPF9GDvClqV8ASvvbi
// SIG // tfjaD7dVPOFLb7N7fvt/qWogGN5eis0FXCqVJdmPZZaX
// SIG // 2h4iG0otsAhfq8yvSlJ0YwO4i5GDeLQwTsMN1Rf2UAHQ
// SIG // KCUYkFsLSQ0mqbaRbDZhB+2pFL/q/c2a6hlHLnapYyfw
// SIG // lNFXkDhwAFWEzfwFHER2oR42UayfN9tsO/p2tWk33Crn
// SIG // HdndJDrIZ6oQ3D+Ngol/TR8BAgXCIM6se6YlLDTsxRwh
// SIG // 9QUDq7KVhKy58HGKJUqwgIW0E7cvlzUl0Hft/ebhALZy
// SIG // FDkhof9C5Cq4c/486XLjQq0nbuKsFNhQU0yvABR3eohw
// SIG // 63Kps66Uma48oE0JmqOxmzrPvrITYcsnByKleiHn+4yq
// SIG // +Ts/KrtqkQwQcuikMPrZwXCtsYkxMUyUn8gr8oew22WD
// SIG // eIQECAM1Cz9TcdJadsrToKqXQa2bAn/AABAYyogPPONf
// SIG // GvojTI3DlYD42etMa/gPeZJavX+z7x8d/4eYBnJ9WFSi
// SIG // 9q0v+vLOGc3fyM2KQtq5eVbHX5rVyWc6bJ35AgMBAAGj
// SIG // ggHCMIIBvjAQBgkrBgEEAYI3FQEEAwIBADAdBgNVHQ4E
// SIG // FgQU8S+6kRZ83n1SJzH1evvVWFlpOj0wVAYDVR0gBE0w
// SIG // SzBJBgRVHSAAMEEwPwYIKwYBBQUHAgEWM2h0dHA6Ly93
// SIG // d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvRG9jcy9SZXBv
// SIG // c2l0b3J5Lmh0bTAZBgkrBgEEAYI3FAIEDB4KAFMAdQBi
// SIG // AEMAQTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB
// SIG // /zAfBgNVHSMEGDAWgBQODLFkab0tsdVrJqZH6lZOgMPt
// SIG // ijBmBgNVHR8EXzBdMFugWaBXhlVodHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpb3BzL2NybC9NaWNyb3NvZnQl
// SIG // MjBSU0ElMjBTZXJ2aWNlcyUyMFJvb3QlMjBDQSUyMDIw
// SIG // MjEuY3JsMHMGCCsGAQUFBwEBBGcwZTBjBggrBgEFBQcw
// SIG // AoZXaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraW9w
// SIG // cy9jZXJ0cy9NaWNyb3NvZnQlMjBSU0ElMjBTZXJ2aWNl
// SIG // cyUyMFJvb3QlMjBDQSUyMDIwMjEuY3J0MA0GCSqGSIb3
// SIG // DQEBDAUAA4ICAQBin7PMBnXjnIJ0x++LnudLDWWnZ8dZ
// SIG // mJ14DuZfUss/doUThLAM4crrHaTbJoulUUELNd2AnOpX
// SIG // /Z4tenUMT3sjYIdPYyJfIYWPRqfI6Nbz+JVK7RRvn2nl
// SIG // 5EEMIuRE6UKS9ZGBbf02a7sb04E/7BN/NhhrmtS/tVFj
// SIG // fRrrVh9zXku45rqWuCwUTzg3EqxKQ8OGbtjBQtq/Syb/
// SIG // clm5BHsoh3XhMnb9VLv3G1duNf90FL5/o88XZ4L18nx1
// SIG // lfky2nllY4HIA8PK8AarqAW4iKSTA3EGqn8s/47WtQKT
// SIG // +qED2YbZXVOYL+L7vQDCnFbwhgAx6ucuMz7Ae1rqibg3
// SIG // AjsC7U5M3oA/vqAHDKDA3mdM5D6L/ZEdQgaG20HhUOSQ
// SIG // +CiQD3TyHSiVCfVMuTv83IiKCni3LW/23tHC2tbN57rl
// SIG // hMcoyjIi+IVd7j7s41MFBaDwJrmfXn/YM+lR/5QqvO7z
// SIG // WAbbr/XU531v3jr/jBilmrqt6U/b7y8TXyA9nYxV9iSM
// SIG // FmcbyIi2xgdcAHhxnpXcvcvyFWET6YiJiyeSJZwwJv8g
// SIG // wXiBF+Zh0IHArl6KVsbAdsATuP1TCEBpPynXZmkviIEW
// SIG // Ptnv315ZjTC7nPoOpSnOVaO7wZztrOefZunI5fBxw7mG
// SIG // 1oyoRnADZawiFsVo9J/cDu15ErRCfDQRhwSiBTGCGk8w
// SIG // ghpLAgEBMHkwYjELMAkGA1UEBhMCVVMxHjAcBgNVBAoT
// SIG // FU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEzMDEGA1UEAxMq
// SIG // QXp1cmUgUlNBIFB1YmxpYyBTZXJ2aWNlcyBDb2RlIFNp
// SIG // Z25pbmcgUENBAhMzAAAA0wKI2Gm93wIJAAAAAADTMA0G
// SIG // CWCGSAFlAwQCAQUAoIGQMBkGCSqGSIb3DQEJAzEMBgor
// SIG // BgEEAYI3AgEEMC8GCSqGSIb3DQEJBDEiBCABDVM22ETo
// SIG // h7EoNDtV8sE/LZRTozC6hoEudryDugIBtzBCBgorBgEE
// SIG // AYI3AgEMMTQwMqAUgBIATQBpAGMAcgBvAHMAbwBmAHSh
// SIG // GoAYaHR0cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqG
// SIG // SIb3DQEBAQUABIIBgArLr0PnmWfNJEibhW4mQqWHBX7v
// SIG // q2UJ0XqHDKj236fTkSINkazDfn13VYBharXYMgL6f6Su
// SIG // 7wqDbidxGvB2NAZZiO0UfQIv0V9feiQTotfOIywojh5f
// SIG // JEN5m3OGGx3YAH0CaoIivS0zpehg8mT4D/99MFcyrn5g
// SIG // 5cUCDGKuQRCxYXdwk/ivHL5xmePCKiQQINmj0PUaQ5I9
// SIG // 2wrff7cVg3Xw2ZOyeDamow1cviw+L/U3FizssIMEzaW7
// SIG // ZrbASHsY21cW/pYNyJkHFbF/s6TLbJGzxg5bPTjQvACl
// SIG // TWHIYlVJ2gB3AeYaXlNX1hJZV9r7P67+OzVKlqh1+Rr2
// SIG // tcLcUv1eBvy/+qVKYkizblc3YWqdXqlL+rWYlvdt514g
// SIG // PXRnfmckjlGZxnrUOYlko91mbOegFwOZyJVM+Q9fV9fm
// SIG // /aZmx15ucEmob3JIF8aDsLZRTExgJb5dD0iwzLE8r/9A
// SIG // WhczjkQd+LMjibu7F0buGzUxlz9o39k3b0Nu693C3SsG
// SIG // 5aGCF5QwgheQBgorBgEEAYI3AwMBMYIXgDCCF3wGCSqG
// SIG // SIb3DQEHAqCCF20wghdpAgEDMQ8wDQYJYIZIAWUDBAIB
// SIG // BQAwggFSBgsqhkiG9w0BCRABBKCCAUEEggE9MIIBOQIB
// SIG // AQYKKwYBBAGEWQoDATAxMA0GCWCGSAFlAwQCAQUABCCN
// SIG // GprO27U0xpnR8T4cWktNF5BpH64+qMLLbzPi/Roc1wIG
// SIG // ateB3S5JGBMyMDI2MTAyNjA2NTkzMS45NDVaMASAAgH0
// SIG // oIHRpIHOMIHLMQswCQYDVQQGEwJVUzETMBEGA1UECBMK
// SIG // V2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwG
// SIG // A1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSUwIwYD
// SIG // VQQLExxNaWNyb3NvZnQgQW1lcmljYSBPcGVyYXRpb25z
// SIG // MScwJQYDVQQLEx5uU2hpZWxkIFRTUyBFU046QTQwMC0w
// SIG // NUUwLUQ5NDcxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1l
// SIG // LVN0YW1wIFNlcnZpY2WgghHqMIIHIDCCBQigAwIBAgIT
// SIG // MwAAAijwpYfX88geQAABAAACKDANBgkqhkiG9w0BAQsF
// SIG // ADB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGlu
// SIG // Z3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMV
// SIG // TWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1N
// SIG // aWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAeFw0y
// SIG // NjAyMTkxOTQwMDZaFw0yNzA1MTcxOTQwMDZaMIHLMQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMSUwIwYDVQQLExxNaWNyb3Nv
// SIG // ZnQgQW1lcmljYSBPcGVyYXRpb25zMScwJQYDVQQLEx5u
// SIG // U2hpZWxkIFRTUyBFU046QTQwMC0wNUUwLUQ5NDcxJTAj
// SIG // BgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZp
// SIG // Y2UwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoIC
// SIG // AQCujvbk/sqcCSReZaJfCuf1NwRcc7XknhE6wkLofkNj
// SIG // 1mxEAg35qy2xcFjgjartVvA09W8QHcpyMqVSXOTxNHJs
// SIG // mk0qP2CDLvUAulWg7aS5oBORpEX1oz3n0R2nPqeH0IHK
// SIG // 1zJxjxaHW21AbuZ0Z+wM3WYNzkBlcHmVe03ZG7rlk28h
// SIG // 72r5P5ME8FGpFmYW5Hl7psKbgLEfrYAitpttsb+sZsBU
// SIG // I+hMKl4uLJYotKyZv1ewOIinBfRU8QosivjofaBezUf9
// SIG // NdV+iGrWh321WnSsK3A/Jl6GLtbSWXcJWULgbxuqnobP
// SIG // K+YlB3174TMWTgX4YWjG7o0Otz/pjHNCKBbB788dynhL
// SIG // dGY6B08E9+4SGrRpsty4iJHOydHCA5M4i5yYRwsdut+g
// SIG // mvxIpT8yNXJcjJCg0vO8mv/nFY9Wytv2qmCtCFFivGUW
// SIG // qU20/sUeRooQZGiQOJQn095Cj3isIsvRP8KU7hN/EDI8
// SIG // HVsb/NPzMFLvRznrRnj0TOnDiOTUcnYwmk+XfoS1owsk
// SIG // cCCCwHnbC00D58z83y7K5ZJB745hcn4CE2nR3e6RGsr4
// SIG // 2y5qtt6Mdz/s7MTnDS2UmVHWX1X/HZe3UlX8gj/t63L5
// SIG // 0xIPqkRCBEdM1ADNUaSfo9OQiKb/bj1diZCGTfEDUBBL
// SIG // op1mhkwIF82faplV2busZ+U4kQIDAQABo4IBSTCCAUUw
// SIG // HQYDVR0OBBYEFKrJpYz48tzouvVkBVthASFpQ93DMB8G
// SIG // A1UdIwQYMBaAFJ+nFV0AXmJdg/Tl0mWnG1M1GelyMF8G
// SIG // A1UdHwRYMFYwVKBSoFCGTmh0dHA6Ly93d3cubWljcm9z
// SIG // b2Z0LmNvbS9wa2lvcHMvY3JsL01pY3Jvc29mdCUyMFRp
// SIG // bWUtU3RhbXAlMjBQQ0ElMjAyMDEwKDEpLmNybDBsBggr
// SIG // BgEFBQcBAQRgMF4wXAYIKwYBBQUHMAKGUGh0dHA6Ly93
// SIG // d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvY2VydHMvTWlj
// SIG // cm9zb2Z0JTIwVGltZS1TdGFtcCUyMFBDQSUyMDIwMTAo
// SIG // MSkuY3J0MAwGA1UdEwEB/wQCMAAwFgYDVR0lAQH/BAww
// SIG // CgYIKwYBBQUHAwgwDgYDVR0PAQH/BAQDAgeAMA0GCSqG
// SIG // SIb3DQEBCwUAA4ICAQCQ6NfLmrRahgVtgWg383GaS07f
// SIG // Hyod6bhcUONt2tet+6BaNuH0r7ABkVHheOpxBdrUrOEY
// SIG // VEaIii9dK3cuZLNmp1iUAx/VbmOZYl7xz+tNrjCWqrg1
// SIG // jQmq0oRB8iE4QJpwNhGP67oY5huYIU0D4lhDoahqfgKJ
// SIG // n/0Bk+9UKDPw5XlUYmreFmJlj9YQzcPPep8MxBXxh/Y5
// SIG // I7vQeRaW5SjtiLQOLRk3ggvraDs5Sf49MJV6/BwxXC2r
// SIG // vUfEFX6SUDooqKIE9NgVIRq0RZu7Ot0i0Is+HvPP0hB6
// SIG // KwOxMg1SWKOfTtFpWpdo8MJvgKCHkPpXEzgprP+pyIHu
// SIG // O7gVRlSTsbYBFLh2yId/itM4uYL0R+2SSBBTpSSRthrG
// SIG // uEmElI5BCHMxzMg/oqHSPwZAIAkM2C4xxi0St7qMuA+m
// SIG // +ZzFYkfoF41QoSJn+HjqhqWYQ0m/SO9/KnJRJJUwMd5T
// SIG // iMnjZ+E/DJiUry5udiWyQpvfj2hQFI0djhahoAXDazeE
// SIG // ciLF2uEnTur9UfjcwOun/oMY+ULftnOi2jKLMrreV097
// SIG // akzz/JxpnDgYJU/tgU7fQflg7IqiL9+0276+joQHo21m
// SIG // VeY5YD8Kh/kUaY6Jm/OTM88G7evTz/qnRumxovTjMStv
// SIG // pbAHNRhmSTdIPTV32CyuxDKS/V5a5iwA+f9ViBo+wjCC
// SIG // B3EwggVZoAMCAQICEzMAAAAVxedrngKbSZkAAAAAABUw
// SIG // DQYJKoZIhvcNAQELBQAwgYgxCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xMjAwBgNVBAMTKU1pY3Jvc29mdCBSb290IENlcnRp
// SIG // ZmljYXRlIEF1dGhvcml0eSAyMDEwMB4XDTIxMDkzMDE4
// SIG // MjIyNVoXDTMwMDkzMDE4MzIyNVowfDELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUt
// SIG // U3RhbXAgUENBIDIwMTAwggIiMA0GCSqGSIb3DQEBAQUA
// SIG // A4ICDwAwggIKAoICAQDk4aZM57RyIQt5osvXJHm9DtWC
// SIG // 0/3unAcH0qlsTnXIyjVX9gF/bErg4r25PhdgM/9cT8dm
// SIG // 95VTcVrifkpa/rg2Z4VGIwy1jRPPdzLAEBjoYH1qUoNE
// SIG // t6aORmsHFPPFdvWGUNzBRMhxXFExN6AKOG6N7dcP2CZT
// SIG // fDlhAnrEqv1yaa8dq6z2Nr41JmTamDu6GnszrYBbfowQ
// SIG // HJ1S/rboYiXcag/PXfT+jlPP1uyFVk3v3byNpOORj7I5
// SIG // LFGc6XBpDco2LXCOMcg1KL3jtIckw+DJj361VI/c+gVV
// SIG // mG1oO5pGve2krnopN6zL64NF50ZuyjLVwIYwXE8s4mKy
// SIG // zbnijYjklqwBSru+cakXW2dg3viSkR4dPf0gz3N9QZpG
// SIG // dc3EXzTdEonW/aUgfX782Z5F37ZyL9t9X4C626p+Nuw2
// SIG // TPYrbqgSUei/BQOj0XOmTTd0lBw0gg/wEPK3Rxjtp+iZ
// SIG // fD9M269ewvPV2HM9Q07BMzlMjgK8QmguEOqEUUbi0b1q
// SIG // GFphAXPKZ6Je1yh2AuIzGHLXpyDwwvoSCtdjbwzJNmSL
// SIG // W6CmgyFdXzB0kZSU2LlQ+QuJYfM2BjUYhEfb3BvR/bLU
// SIG // HMVr9lxSUV0S2yW6r1AFemzFER1y7435UsSFF5PAPBXb
// SIG // GjfHCBUYP3irRbb1Hode2o+eFnJpxq57t7c+auIurQID
// SIG // AQABo4IB3TCCAdkwEgYJKwYBBAGCNxUBBAUCAwEAATAj
// SIG // BgkrBgEEAYI3FQIEFgQUKqdS/mTEmr6CkTxGNSnPEP8v
// SIG // BO4wHQYDVR0OBBYEFJ+nFV0AXmJdg/Tl0mWnG1M1Gely
// SIG // MFwGA1UdIARVMFMwUQYMKwYBBAGCN0yDfQEBMEEwPwYI
// SIG // KwYBBQUHAgEWM2h0dHA6Ly93d3cubWljcm9zb2Z0LmNv
// SIG // bS9wa2lvcHMvRG9jcy9SZXBvc2l0b3J5Lmh0bTATBgNV
// SIG // HSUEDDAKBggrBgEFBQcDCDAZBgkrBgEEAYI3FAIEDB4K
// SIG // AFMAdQBiAEMAQTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/
// SIG // BAUwAwEB/zAfBgNVHSMEGDAWgBTV9lbLj+iiXGJo0T2U
// SIG // kFvXzpoYxDBWBgNVHR8ETzBNMEugSaBHhkVodHRwOi8v
// SIG // Y3JsLm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0
// SIG // cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0yMy5jcmwwWgYI
// SIG // KwYBBQUHAQEETjBMMEoGCCsGAQUFBzAChj5odHRwOi8v
// SIG // d3d3Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY1Jv
// SIG // b0NlckF1dF8yMDEwLTA2LTIzLmNydDANBgkqhkiG9w0B
// SIG // AQsFAAOCAgEAnVV9/Cqt4SwfZwExJFvhnnJL/Klv6lwU
// SIG // tj5OR2R4sQaTlz0xM7U518JxNj/aZGx80HU5bbsPMeTC
// SIG // j/ts0aGUGCLu6WZnOlNN3Zi6th542DYunKmCVgADsAW+
// SIG // iehp4LoJ7nvfam++Kctu2D9IdQHZGN5tggz1bSNU5HhT
// SIG // dSRXud2f8449xvNo32X2pFaq95W2KFUn0CS9QKC/GbYS
// SIG // EhFdPSfgQJY4rPf5KYnDvBewVIVCs/wMnosZiefwC2qB
// SIG // woEZQhlSdYo2wh3DYXMuLGt7bj8sCXgU6ZGyqVvfSaN0
// SIG // DLzskYDSPeZKPmY7T7uG+jIa2Zb0j/aRAfbOxnT99kxy
// SIG // bxCrdTDFNLB62FD+CljdQDzHVG2dY3RILLFORy3BFARx
// SIG // v2T5JL5zbcqOCb2zAVdJVGTZc9d/HltEAY5aGZFrDZ+k
// SIG // KNxnGSgkujhLmm77IVRrakURR6nxt67I6IleT53S0Ex2
// SIG // tVdUCbFpAUR+fKFhbHP+CrvsQWY9af3LwUFJfn6Tvsv4
// SIG // O+S3Fb+0zj6lMVGEvL8CwYKiexcdFYmNcP7ntdAoGokL
// SIG // jzbaukz5m/8K6TT4JDVnK+ANuOaMmdbhIurwJ0I9JZTm
// SIG // dHRbatGePu1+oDEzfbzL6Xu/OHBE0ZDxyKs6ijoIYn/Z
// SIG // cGNTTY3ugm2lBRDBcQZqELQdVTNYs6FwZvKhggNNMIIC
// SIG // NQIBATCB+aGB0aSBzjCByzELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjElMCMGA1UECxMcTWljcm9zb2Z0IEFtZXJpY2EgT3Bl
// SIG // cmF0aW9uczEnMCUGA1UECxMeblNoaWVsZCBUU1MgRVNO
// SIG // OkE0MDAtMDVFMC1EOTQ3MSUwIwYDVQQDExxNaWNyb3Nv
// SIG // ZnQgVGltZS1TdGFtcCBTZXJ2aWNloiMKAQEwBwYFKw4D
// SIG // AhoDFQB1rbmFkzS7qAK1Oav08AUnhbNIUqCBgzCBgKR+
// SIG // MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5n
// SIG // dG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVN
// SIG // aWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMTHU1p
// SIG // Y3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwMA0GCSqG
// SIG // SIb3DQEBCwUAAgUA7ok/JDAiGA8yMDI2MTAyNjAyNTMy
// SIG // NFoYDzIwMjYxMDI3MDI1MzI0WjB0MDoGCisGAQQBhFkK
// SIG // BAExLDAqMAoCBQDuiT8kAgEAMAcCAQACAgiGMAcCAQAC
// SIG // AhKIMAoCBQDuipCkAgEAMDYGCisGAQQBhFkKBAIxKDAm
// SIG // MAwGCisGAQQBhFkKAwKgCjAIAgEAAgMHoSChCjAIAgEA
// SIG // AgMBhqAwDQYJKoZIhvcNAQELBQADggEBAAFSnzQa2SWp
// SIG // FCtLvt6+BGuR6fkErMy76pp1vJ3hveOMkA7aC8zo7s5d
// SIG // 3kILBScy9LnO9Itc3iDpmzYA696NElWS2vVZPThzJSj6
// SIG // 3Hk74M6XrHoVFVudu94u2zpPAsq3l/rf/x2lr6ZU9feT
// SIG // L15j4gHHOkZCwc/kVX8qY5M1KLG9mx2WTmaueG18XGNg
// SIG // BruLpeHGXPg+f/38bMLH5HJnR5l7mD84rZbAvxxM4oRB
// SIG // nuLvApDvtrdMoNVbeBpar8/xoH4WN3Ne0nBCFxTvkDU3
// SIG // 1WJgzSIdBWgic4F62iiXiNTMTVZU2pTrSGQRbarhQ1jW
// SIG // SI/ocxHADmgSol4KWpd7Ls4xggQNMIIECQIBATCBkzB8
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMAITMwAAAijw
// SIG // pYfX88geQAABAAACKDANBglghkgBZQMEAgEFAKCCAUow
// SIG // GgYJKoZIhvcNAQkDMQ0GCyqGSIb3DQEJEAEEMC8GCSqG
// SIG // SIb3DQEJBDEiBCBEErZyewSutNgmBZzMiwURR4PlHzG2
// SIG // 9L7bCAXDgIGQtDCB+gYLKoZIhvcNAQkQAi8xgeowgecw
// SIG // geQwgb0EIFWxikZRYGNf4oEVZK1eT45H+3GQ3/qxV75V
// SIG // wuBt+iLXMIGYMIGApH4wfDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAg
// SIG // UENBIDIwMTACEzMAAAIo8KWH1/PIHkAAAQAAAigwIgQg
// SIG // A0EltpqCo/DZAMWK25b07RzskLjlqAnvjTbbrDbcgVAw
// SIG // DQYJKoZIhvcNAQELBQAEggIAAabWzKMhx32FaZBcb0CQ
// SIG // swqpjyyzgfT5jnyahB1VURMpGUHvCON+P66/xWxjQ0hi
// SIG // DIssNYywj72xS7+isa37+4eeyVFR5/ZFgKtF9/XdDTHz
// SIG // G1NGO11Cru8NN5UyYJ+yx1R84oqhnAxEEZj0mn8Cwbrp
// SIG // tgwF0th2JWoFtovfxT5X1pVQb/rUnp9KUh0KwiTyxxkY
// SIG // twOwRn8opIFbSl9mkZwI4f7Dx6jt6u1Mc5LZ9tnTeszf
// SIG // 8Y0nhLw+Ntl5rgQPyO+sv6udJq7fNmGe8GQQiDL1Aemf
// SIG // r29Z0xV2TCnBAB3QiQOh6ZeB96vmrTu6oVffY1cWgDjG
// SIG // oVLWeQzh4cZVdbZNcZ7KqmwgwdXUPUqv2zkrvFErD3BH
// SIG // EU9G2KElGwvyS8GXlAA1fz4A4T7EGthhvOE45GORIM7M
// SIG // jVbMQ7x0GUNPUNwp3mEOt7FWH3RRJuC8OfQQH3bKUlXJ
// SIG // NchUyGD3/MUvoE79A/qCOC271gOKCV52fgK85d9zaxuT
// SIG // OP58H03bardSs32rmNGEOuUxn2glfuBgz+nSm5tE3kdA
// SIG // 8nUUTC54hstpSXVcwgTjcEM/HOKpygdYpu4xAATOa0wd
// SIG // FeF9qgy0nYtC3CTGKnNRHH3wwKobcF/ZNILFNyQwS9N0
// SIG // SpM5e/D0jw9/6U//v9Sht3dSSJozP+eEyGKCvuwEZeL3+R8=
// SIG // End signature block
