/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CS2010', {
    CS2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CS2_CODREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CS2_CODEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CS2_CODFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CS2_NOMEEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    CS2_CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CS2_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CS2_IE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CS2_IM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CS2_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CS2_NOMFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    CS2_DESCMU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    CS2_SITESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CS2_DTNIRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CS2_ENTREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CS2_INSCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    CS2_NIRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
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
    CS2_CODSCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    }
  }, {
    tableName: 'CS2010'
  });
};
