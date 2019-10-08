/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CB0010', {
    CB0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CB0_CODETI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CB0_DTNASC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CB0_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CB0_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CB0_QTDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CB0_USUARI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CB0_DISPID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CB0_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CB0_LOCALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CB0_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CB0_SLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CB0_DTVLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CB0_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    CB0_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CB0_CODET2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CB0_ENDSUG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    CB0_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CB0_LOJAFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CB0_PEDCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CB0_NFENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CB0_SERIEE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CB0_CLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CB0_LOJACL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CB0_PEDVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CB0_NFSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CB0_SERIES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CB0_VOLUME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CB0_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CB0_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB0_LOCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CB0_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CB0_PALLET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CB0_OPREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    CB0_NUMSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CB0_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CB0_ITNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CB0_SDOCS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CB0_SDOCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'CB0010'
  });
};
