/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CDA010', {
    CDA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDA_TPMOVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDA_ESPECI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CDA_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDA_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CDA_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDA_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDA_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDA_NUMITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CDA_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDA_CODLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CDA_CALPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDA_BASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CDA_ALIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CDA_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CDA_TPREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDA_CODOLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                      '
    },
    CDA_IFCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    },
    CDA_TPLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDA_VL197: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDA_CLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CDA_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDA_CODREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    CDA_UFGNRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDA_GNRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CDA_GUIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDA_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CDA010'
  });
};
