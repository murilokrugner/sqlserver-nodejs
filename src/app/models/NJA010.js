/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NJA010', {
    NJA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NJA_CODCET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NJA_STACER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NJA_CETORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NJA_CARTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    NJA_PTOEMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NJA_PROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    NJA_CODSAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    NJA_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NJA_DATAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NJA_LIQUID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_IMPIVA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_TOTSER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_DATANU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NJA_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NJA_COMPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NJA_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    NJA_DEPOSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NJA_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NJA_DESTIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NJA_LOJDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NJA_MNTALM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_MNTACA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_MNTGG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_PSECDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_PSECA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_MNTSEC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_MNTCPE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_MNTOTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_PESNMV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_FORPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NJA_MNTSOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_STALIQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NJA_TIPCER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NJA_PESOBR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_DESORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_DESUMI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_DESOUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_TRANSF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_LIQDAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_SALDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NJA_DESSEC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'NJA010'
  });
};
