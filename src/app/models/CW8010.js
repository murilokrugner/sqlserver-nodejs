/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CW8010', {
    CW8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CW8_FILTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CW8_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CW8_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    CW8_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CW8_CAMPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CW8_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CW8_TIPCPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CW8_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CW8_VALANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    CW8_VALNOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    CW8_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CW8_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CW8_OPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CW8_HISTOR: {
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
    }
  }, {
    tableName: 'CW8010'
  });
};
