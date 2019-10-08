/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CFF010', {
    CFF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CFF_CODLEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CFF_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CFF_ANEXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CFF_ART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CFF_INC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CFF_ALIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CFF_PRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CFF_ITM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CFF_LTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CFF_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CFF_NUMDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CFF_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CFF_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CFF_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CFF_ITEMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CFF_SDOC: {
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
    tableName: 'CFF010'
  });
};
