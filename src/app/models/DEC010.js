/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEC010', {
    DEC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DEC_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DEC_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DEC_CODLAY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DEC_NOMARQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                         '
    },
    DEC_SEQARQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DEC_IDENTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DEC_TAMIDT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DEC_TIPENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DEC_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    DEC_CODQBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'DEC010'
  });
};
