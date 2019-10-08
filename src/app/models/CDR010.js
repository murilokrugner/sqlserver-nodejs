/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CDR010', {
    CDR_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDR_NMTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CDR_CDRECP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CDR_NMRECP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CDR_CDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CDR_DTENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CDR_NUMINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CDR_TPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDR_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CDR_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDR_ESPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CDR_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDR_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDR_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDR_CDTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    CDR_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'CDR010'
  });
};
